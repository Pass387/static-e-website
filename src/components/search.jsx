import { useState } from "react";
import ProductCard from "./productCard";
import productsData from "../products.json";

export function ProductSearch() {
  const [query, setQuery] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const q = query.toLowerCase();

    return (
      product.name?.toLowerCase().includes(q) ||
      product.category?.toLowerCase().includes(q) ||
      product.price?.toString().includes(q)
    );
  });

  return (
    <div>
      <h1 id="title">Abuzo Electronics</h1>
      <p id="description">Browse and search our products below</p>
      <br />
      <br />

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} id="searchbar"
      />
      <br />
      <br />
      <br />
      <br />


      <div className="section-card">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && <p>No products found</p>}
    </div>
  );
}