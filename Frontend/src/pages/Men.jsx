import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./CategoryPage.css";

const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products?category=men")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="category-page">
      <h2>Men Collection</h2>

      <div className="product-flex">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            product={item}
            onAddToCart={() => {}}
          />
        ))}
      </div>
    </section>
  );
};

export default Men;
