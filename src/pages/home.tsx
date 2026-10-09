import img from  "../assets/images.jpg";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../App.css'
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
`;
function Home() {


  return (
<>

    <div className="fundraise-page">
      

      <main className="site" id="content">
        <span className="ring ring-left" aria-hidden="true" />
        <span className="ring ring-right" aria-hidden="true" />
        <Header />
        

        <section className="hero-copy" aria-labelledby="hero-title">
          <h1 id="hero-title">
            Fundraising vs
            <br />
            <strong>CANCER</strong>
          </h1>
          <p className="description">
            A fundraiser aimed to get funding for cancer research, financial assistance for cancer patients and development of anti cancer technologies.
          </p>
          <button className="button donate" type="button">
            Donate now
          </button>
        </section>

        <div className="photo">
          <img
            src={img}
          />
        </div>

        <section className="total" aria-label="Fundraising total">
          <p>Raised so far</p>
          <strong>$50,027</strong>
        </section>
      </main>
      <Card />
      <Footer />

    </div>

</>

  )
}

export default Home
