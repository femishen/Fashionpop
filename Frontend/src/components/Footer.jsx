import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* BRAND */}
        <div className="footer-brand">
          <h2 className="logo">🌈 FashionPop</h2>
          <p>
            Colorful fashion for everyone! <br />
            Express yourself with our playful and trendy collections.
          </p>

          <div className="socials">
            <span>📸</span>
            <span>🐦</span>
            <span>📘</span>
          </div>
        </div>

        {/* SHOP */}
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Infant</li>
          </ul>
        </div>

        {/* HELP */}
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div className="footer-col">
          <h4>Stay Updated</h4>
          <p className="subscribe-text">
            Subscribe for exclusive deals <br />
            and new arrivals!
          </p>

          <div className="subscribe-box">
            <input
              type="email"
              placeholder="your@email.com"
            />
            <button>✉️</button>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2024 FashionPop. Made with 💖 and lots of color!
      </div>
    </footer>
  );
};

export default Footer;
