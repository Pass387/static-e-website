

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.164794074515!2d37.07560727445474!3d-1.0370471989529715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e88b726b5fb%3A0xfaaa9b3e84deb8a8!2sKapanga%20Land%20Surveys!5e0!3m2!1sen!2ske!4v1777456007680!5m2!1sen!2ske"  
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          width="90%"
          height="300"
        />
      </section>
      <br />
      <br />

    </div>
    

  );
}