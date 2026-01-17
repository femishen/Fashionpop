import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  return (
    <>
      {/* INFO BAR */}
      <div className="info-bar">
        <div className="info-item">
          <span className="info-icon">🚚</span>
          <div>
            <h4>Free Shipping</h4>
            <p>On orders over $50</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">🔄</span>
          <div>
            <h4>Easy Returns</h4>
            <p>30-day return policy</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">🛡️</span>
          <div>
            <h4>Secure Payment</h4>
            <p>100% secure checkout</p>
          </div>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <section className="category-section">
        <h2>Shop by Category</h2>
        <p className="subtitle">
          Find the perfect style for everyone
        </p>

        <div className="category-grid">
          <Link to="/women" className="category-card women">
            <span className="emoji">👗</span>
            <h3>Women</h3>
            <p>Elegant & trendy styles</p>
            <span className="shop-link">Shop Now →</span>
          </Link>

          <Link to="/men" className="category-card men">
            <span className="emoji">👔</span>
            <h3>Men</h3>
            <p>Sharp & comfortable fits</p>
            <span className="shop-link">Shop Now →</span>
          </Link>

          <Link to="/kids" className="category-card kids">
            <span className="emoji">🧒</span>
            <h3>Kids</h3>
            <p>Playful & durable wear</p>
            <span className="shop-link">Shop Now →</span>
          </Link>

          <Link to="/infant" className="category-card infant">
            <span className="emoji">👶</span>
            <h3>Infant</h3>
            <p>Soft & gentle clothing</p>
            <span className="shop-link">Shop Now →</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Categories;
