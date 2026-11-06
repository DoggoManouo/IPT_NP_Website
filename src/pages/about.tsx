import pfp from "../assets/pfp.jpg";
import Header from "../components/header";
import Footer from "../components/footer";
import aboutData from "./about.json";
import './about.css';

function About() {
  return (
    <div className="about-page">
      <div className="site">
        <main>
          <section className="hero" aria-labelledby="about-title">
            <div className="container">
              <p className="eyebrow">{aboutData.eyebrow}</p>
              <h1 id="about-title">
                {aboutData.name}
                <br />
                <span style={{ color: 'var(--green)', fontSize: '0.7em', display: 'block', marginTop: '10px' }}>
                  {aboutData.academicYear}
                </span>
              </h1>
              <p className="hero-description">
                {aboutData.description}
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="container story" aria-labelledby="story-title">
            <div>
              <p className="eyebrow">{aboutData.story.eyebrow}</p>
              <h2 id="story-title">
                {aboutData.story.heading.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < aboutData.story.heading.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
              {aboutData.story.description2.map((text, index) => (
                <p key={index} className="body-copy">
                  {text}
                </p>
              ))}
            </div>

            <aside className="mission" aria-labelledby="mission-title">
              <h3 className="eyebrow" id="mission-title">
                {aboutData.story.photo.title}
              </h3>
              <img src={pfp} alt={aboutData.story.photo.alt} />
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}

export default About;