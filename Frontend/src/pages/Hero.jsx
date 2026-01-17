import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <span className="badge">✨ New Season Collection</span>

        <h1 className="hero-title">
          Fashion That <br />
          <span>Pops!</span>
        </h1>

        <p className="hero-text">
          Discover vibrant styles for the whole family. From
          trendy women's wear to adorable infant outfits.
        </p>


      </div>

      {/* RIGHT CARDS (CONNECTED ONLY) */}
      <div className="hero-right">
        <div
          className="card"
          onClick={() => navigate("/women")}
          style={{ cursor: "pointer" }}
        >
          👗
        </div>

        <div
          className="card"
          onClick={() => navigate("/men")}
          style={{ cursor: "pointer" }}
        >
          👔
        </div>

        <div
          className="card"
          onClick={() => navigate("/kids")}
          style={{ cursor: "pointer" }}
        >
          🧒
        </div>

        <div
          className="card"
          onClick={() => navigate("/infant")}
          style={{ cursor: "pointer" }}
        >
          👶
        </div>
      </div>
    </section>
  );
};

export default Hero;
