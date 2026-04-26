import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const WHATSAPP_NUMBER = "254 710420504";

export default function ProductCard({ product }) {
  const handleWhatsAppSell = () => {
    const message = `Hello, I'd like to buy:\n\nProduct: ${product.name}\nPrice: KES ${product.price?.toLocaleString()}\nProduct ID: ${product.id}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };


  return (
    <section className="section-card">
      <div className="card">
      <Link to={`/product/${product.id}`} className="card-link">
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>
        <div className="card-content">
          <h3 id="name">{product.name}</h3>
          <span id="category">{product.category}</span>
          <span id="price">KES {product.price}</span>
      </div>
      <br />
      <p>Click to buy on Whatsap</p>
      <span onClick={handleWhatsAppSell} className="icon-btn">
      <FaWhatsapp size={24} />
     </span>

        
      </Link>
    </div>
    </section>
    
  
  );
}
