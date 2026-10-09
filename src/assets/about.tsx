import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css'
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
`;
 function AboutPage() {

  return (
<>

    <div className="about-page">
      <style>{styles}</style>

      <div className="site">
        <Header />

        <main>
          {/* Replace the sample copy with your organization's story. */}
          <section className="hero" aria-labelledby="about-title">
            <div className="container">
              <p className="eyebrow">About Care</p>
              <h1 id="about-title">
                Small acts of kindness.
                <br />
                A world of difference.
              </h1>
              <p className="hero-description">
                We believe meaningful change begins when people come
                together. Care is about connecting generosity with
                causes that matter.
              </p>
            </div>
          </section>

          <section
            className="container story"
            aria-labelledby="story-title"
          >
            <div>
              <p className="eyebrow">Our story</p>
              <h2 id="story-title">
                A shared purpose.
                <br />
                A stronger community.
              </h2>
              <p className="body-copy">
                Every great cause starts with people who care.
                Our story is rooted in a simple idea: giving should
                bring us closer to the people and communities we
                want to support.
              </p>
              <p className="body-copy">
                Whether you are taking your first step as a fundraiser
                or supporting a cause close to your heart, there is
                a place for you here.
              </p>
            </div>

            <aside
              className="mission"
              aria-labelledby="mission-title"
            >
              <h3 className="eyebrow" id="mission-title">
                Our mission
              </h3>
              <p>
                Bring people together to turn compassion into
                meaningful action.
              </p>
            </aside>
          </section>

          <section
            className="values-section"
            aria-labelledby="values-title"
          >
            <div className="container">
              <div className="section-intro">
                <p className="eyebrow">What guides us</p>
                <h2 id="values-title">Care in everything we do.</h2>
                <p className="body-copy">
                  These are the principles we aim to bring to
                  every connection, campaign, and act of giving.
                </p>
              </div>

              <div className="values">
                {values.map((value) => (
                  <article className="value-card" key={value.number}>
                    <span className="value-number" aria-hidden="true">
                      {value.number}
                    </span>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                )
              </div>
            </div>
          </section>

          <section
            className="container cta"
            aria-labelledby="cta-title"
          >
            <div>
              <h2 id="cta-title">Be part of something good.</h2>
              <p className="body-copy">
                Explore our fundraising page and find your
                next opportunity to make a difference.
              </p>
            </div>
            <a className="button button-green" href="/">
              Explore the cause
            </a>
          </section>
        </main>
        <Footer />
    </div>

</>

  )
}

export default App
