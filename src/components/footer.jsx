import { FaEnvelope, FaPhone, FaInstagram, FaTelegram, FaTiktok, FaWhatsapp } from "react-icons/fa";
const WHATSAPP_NUMBER = "254 710420504";
const TIKTOK_USERNAME = "https://www.tiktok.com/";
const INSTAGRAM_USERNAME = "LinusAbuz";
const TELEGRAM_USERNAME = "@Abuzo22";
const EMAIL = "abuzlinus63@gmail.com";
const PHONE = "+254710420504";

export default function Footer() {
  const handleWhatsApp = () => {
    const message = "Hello Abuzo, I'd like to contact you for business";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };
  const handleTiktok = () => {
  window.open(`https://www.tiktok.com/@${TIKTOK_USERNAME}`, "_blank");
};
  const handleInstagram = () => {
  window.open(`https://instagram.com/${INSTAGRAM_USERNAME}`, "_blank");
};
  const handleTelegram = () => {
  window.open(`https://t.me/${TELEGRAM_USERNAME}`, "_blank");
};


  return (
    <footer className="footer">

      {/* CONTACT LINKS */}
      <h3><i>Contact</i></h3>
      <br />
      <div className="contact">
        <ul>
          <li>
  <span onClick={handleWhatsApp} className="icon-btn">
    <FaWhatsapp size={24} />
  </span>
</li>
          <br />
          <li><span className="icon-btn" onClick={handleTiktok}><FaTiktok size={24}/></span></li>
        </ul>

        <ul>
          <li><span className="icon-btn" onClick={handleInstagram}><FaInstagram size={24}/></span></li>
          <br />
          <li><span className="icon-btn" onClick={handleTelegram}><FaTelegram size={24}/></span></li>
        </ul>

        <ul>
          <li><a href="mailto:abuzlinus63@gmail.com"><span className="icon-btn"><FaEnvelope size={24}/></span></a></li>
          <br />
          <li><a href="tel:+254710420504"><span className="icon-btn"><FaPhone size={24}/></span> </a></li>
        </ul>
      </div>
      <br />

      {/* BRAND */}
      <div className="brand">
        <h3><i>About</i></h3>
        <br />
        <p>Abuzo Electronics - Tokens Wave Holding Limited</p>
      </div>

      {/* COPYRIGHT */}
      <div className="copyright"> 
        <p>© 2026 Abuzo Electronics</p>
        <br />
        <p>Registered Trademark - Tokens wave Holding Limited &reg;</p>
      </div>
      <br />
      <br />

    </footer>
  );
}