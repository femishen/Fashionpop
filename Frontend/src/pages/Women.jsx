import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";   // ✅ IMPORT
import "./CategoryPage.css";

const Women = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();                  // ✅ USE CONTEXT

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products?category=women")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="category-page">
      <h2>Women Collection</h2>

      <div className="product-flex">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            product={item}
            onAddToCart={addToCart}   // ✅ PASSED PROPERLY
          />
        ))}
      </div>
    </section>
  );
};

export default Women;
