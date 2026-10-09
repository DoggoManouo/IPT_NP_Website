import pfp from  "../assets/pfp.jpg";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import './about.css'
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
`;


function About() {
  return (
    <>
      <div className="about-page">
        <style>{styles}</style>

        <div className="site">
          <main>
            <section className="hero" aria-labelledby="about-title">
              <Header /> 
              
              <div className="container">
                <p className="eyebrow">About Me</p>
                <h1 id="about-title">
                  Tulabut, Harold Duane P.
                  <br />
                  BSIT 3-B
                </h1>
                <p className="hero-description">
                  Hello, my name is Harold Duane P. Tulabut from BSIT 3-B, this is my personal fundraiser website that is work in progress
                </p>
              </div>
            </section>

            <section className="container story" aria-labelledby="story-title">
            <div>
              <p className="eyebrow">The story</p>
              <h2 id="story-title">
                 A Game enjoyer
                <br />
                and Future IT professional
              </h2>
              <p className="body-copy">
                My current hobbies are playing games, watching esports, and darts. Some examples
                of games I'm currently playing is Deadlock, Dota 2, Tekken 8, Apex Legends, AKE, Genshin, Umamusume and more

              </p>
              <p className="body-copy">
                I am in my 3rd year of college pursuing IT in the Infrastructure track,
              </p>
            </div>

            <aside
              className="mission"
              aria-labelledby="mission-title"
            >
              <h3 className="eyebrow" id="mission-title">
                Photo
              </h3>
              <img src ={pfp}></img>
            </aside>
          </section>
        </main>
      </div>

    </div>
    <footer/>


</>

  )
}

export default About
