import { useParams, Link } from "react-router-dom";
import productsData from "../products.json";
const WHATSAPP_NUMBER = "254 710420504";
import { FaWhatsapp } from "react-icons/fa";


export default function ProductDetail() {
  const handleWhatsAppSell = () => {
    const message = `Hello, I'd like to buy:\n\nProduct: ${product.name}\nPrice: KES ${product.price?.toLocaleString()}\nProduct ID: ${product.id}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };
  const { id } = useParams();

  const product = productsData.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="section-card">
      <div className="card">
      <Link to="/">Back</Link>
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>
        <div className="card-content">
          <h3 id="name">{product.name}</h3>
          <span id="category">{product.category}</span>
          <span id="price">KES {product.price}</span>
          <span id="description">{product.description}</span>
          <p>Click to buy on Whatsap</p>
          <br />
          <span onClick={handleWhatsAppSell} className="icon-btn">
          <FaWhatsapp size={24} />
          </span>
      </div>
      <br />
      <br />
      <br />
    </div>
    </section>
  );
}