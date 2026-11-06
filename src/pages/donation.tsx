import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_51MockKeyForTestingOnly"
);

interface DonationProps {
  onClose?: () => void;
}

function DonationForm({ onClose }: DonationProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState<string>("25");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100,
          name,
          email,
        }),
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to initialize payment.");
      }

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card information missing.");

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name,
            email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message || "Payment failed.");
      } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
        setSuccess(true);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="donation-card">
      {success ? (
        <div className="success-view">
          <h3>Thank you for your support! ❤️</h3>
          <p>Your contribution directly aids cancer research and patient care.</p>
          {onClose && (
            <button className="button donate" onClick={onClose}>
              Close
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="donor-info-fields" style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}>
            <div className="custom-amount-field" style={{ margin: 0 }}>
              <label htmlFor="donor-name">Full Name</label>
              <input
                id="donor-name"
                type="text"
                placeholder="First Name Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="custom-amount-field" style={{ margin: 0 }}>
              <label htmlFor="donor-email">Email Address</label>
              <input
                id="donor-email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="preset-amounts">
            {["10", "25", "50", "100"].map((preset) => (
              <button
                type="button"
                key={preset}
                className={`preset-btn ${amount === preset ? "active" : ""}`}
                onClick={() => setAmount(preset)}
              >
                ${preset}
              </button>
            ))}
          </div>

          <div className="custom-amount-field">
            <label htmlFor="custom-amount">Amount ($ USD)</label>
            <input
              id="custom-amount"
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="card-input-wrapper">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#002147",
                    fontFamily: "'Poppins', sans-serif",
                    "::placeholder": { color: "#8ca2bc" },
                  },
                  invalid: { color: "#e53e3e" },
                },
              }}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="form-actions">
            <button
              type="submit"
              className="button donate"
              disabled={!stripe || loading}
            >
              {loading ? "Processing..." : `Donate $${amount}`}
            </button>
            {onClose && (
              <button type="button" className="button-cancel" onClick={onClose}>
                Cancel
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

export default function Donation({ onClose }: DonationProps) {
  return (
    <Elements stripe={stripePromise}>
      <DonationForm onClose={onClose} />
    </Elements>
  );
}