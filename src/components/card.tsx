const values = [
  {
    number: "01",
    title: "Cancer Research",
    description:
      "Help fund researches against cancer to try and find a way to reduce the danger it poses",
  },
  {
    number: "02",
    title: "Help finance cancer patients",
    description:
      "Help patients in need of financial assistance to help them afford treatment",
  },
  {
    number: "03",
    title: "Anti Cancer Technology",
    description:
      "Fund innovative technology that can help reduce the threat of cancer within the patients",
  },
];

function Card() {
  return (
    <section className="values-section" aria-labelledby="values-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">What guides us</p>
          <h2 id="values-title">Care in everything we do.</h2>
          <p className="body-copy">
            These are the 3 major things we hope to fund using the fundraiser money
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
