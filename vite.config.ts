import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'stripe-middleware',
        configureServer(server) {
          // Existing payment intent endpoint
          server.middlewares.use('/api/create-payment-intent', (req, res, next) => {
            if (req.method !== 'POST') return next();
            let body = '';
            req.on('data', (chunk) => { body += chunk; });
            req.on('end', async () => {
              try {
                const Stripe = (await import('stripe')).default;
                const stripe = new Stripe(env.STRIPE_SECRET_KEY || env.VITE_STRIPE_SECRET_KEY || '');
                const data = JSON.parse(body);

                const customer = await stripe.customers.create({
                  name: data.name,
                  email: data.email,
                });

                const paymentIntent = await stripe.paymentIntents.create({
                  amount: data.amount,
                  currency: 'usd',
                  customer: customer.id,
                  receipt_email: data.email,
                  metadata: {
                    customerName: data.name,
                    customerEmail: data.email,
                  },
                });

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ clientSecret: paymentIntent.client_secret }));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });

          // New balance summary endpoint
          server.middlewares.use('/api/balance-summary', async (req, res, next) => {
            if (req.method !== 'GET') return next();
            try {
              const Stripe = (await import('stripe')).default;
              const stripe = new Stripe(env.STRIPE_SECRET_KEY || env.VITE_STRIPE_SECRET_KEY || '');
              
              const balance = await stripe.balance.retrieve();

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                incoming: balance.pending.reduce((acc, curr) => acc + curr.amount, 0),
                available: balance.available.reduce((acc, curr) => acc + curr.amount, 0),
              }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        },
      },
    ],
  };
});