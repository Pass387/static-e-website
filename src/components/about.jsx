

export default function AboutContact() {

  return (
    <div>

      {/* HERO */}
      <br />
      <br />
      <section className="hero">
        <h1>Token Wave Holding Limited.</h1>
        <br />
        <p>Abuzo Electronics is one of the  services provided and licensed by Token Wave Holding limited.</p>
        <br />
        <br />
        <div className="hero-cert">
          <img src="/certificates/IMG-20260425-WA0002.jpg" alt="Token Wave Holding Limited Logo" className="hero-image"/>
        </div>
      </section>
      <br/>
      <br/>


      {/* ABOUT */}
      <section className="about-section">
        <h2><i>Who We Are</i></h2>

        <h3>Our bread and butter is offering crypto services to any international company interested in:
          <ol>
            <li>Creating Awareness - We create buzz around your product by creating forums and also advertising to our long outreach</li>
            <br />
            <li>Registration - We can also register users on your behalf thus eliminating some of your business cost</li>
            <br />
            <li>Oversee Investment - We can offer platforms for local individuals to invest in your product thus simplifying the process</li>
            <br />
            <li>Product roll out - As we have stronghold on the youth.</li>
          </ol>
        </h3>
      </section>
      <br />
      <br />

      {/* CERTIFICATES */}
      <section className="about-cert">
        <h2><i>Our Certifications</i></h2>
        <br />
        <h3>Incorporation certificate &reg;</h3>
        <div className="hero-cert">
          <img src="/certificates/IMG_20260425_152456_416.jpg" alt="Certificate of Incorporation" className="cert-image"/>
        </div>
      </section>
      <br />
      <br />


      

      {/* MAP */}
      <h3>Our Location</h3>
      <br />
      <section>
        <iframe
          title="Location"
          src="https://www.google.com/maps?q=Thika&output=embed"
          width="90%"
          height="300"
        />
      </section>
      <br />
      <br />

    </div>
    

  );
}