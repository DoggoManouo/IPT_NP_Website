import { useState, useEffect } from "react";
import img from "../assets/images.jpg";
import Header from "../components/header";
import Card from "../components/card";
import Footer from "../components/footer";
import Donation from "./donation";
import "../App.css";

function Home() {
  const [isDonateOpen, setIsDonateOpen] = useState<boolean>(false);
  const [balance, setBalance] = useState<{ incoming: number; available: number } | null>(null);

  useEffect(() => {
    fetch("/api/balance-summary")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setBalance(data);
      })
      .catch((err) => console.error("Failed to fetch balance summary:", err));
  }, []);

  const totalRaised = balance
    ? 50027 + (balance.incoming + balance.available) / 100
    : 50027;

  return (
    <div className="fundraise-page">

      <main className="site" id="content">
        <div className="container hero-grid">
          <section className="hero-copy" aria-labelledby="hero-title">
            <h1 id="hero-title">
              Fundraising vs
              <br />
              <strong>CANCER</strong>
            </h1>
            <p className="description">
              A fundraiser aimed at securing funding for cancer research,
              providing financial assistance for cancer patients, and
              accelerating anti-cancer technology development.
            </p>
            <button
              className="button donate"
              type="button"
              onClick={() => setIsDonateOpen(true)}
            >
              Donate Now
            </button>
          </section>

          <div className="hero-visual">
            <div className="photo">
              <img src={img} alt="Medical assistance" />
            </div>

            <section className="total" aria-label="Fundraising total">
              <p>Raised so far</p>
              <strong>
                ${totalRaised.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </strong>
            </section>
          </div>
        </div>
      </main>

      <Card />

      {isDonateOpen && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 33, 71, 0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <Donation onClose={() => setIsDonateOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Home;