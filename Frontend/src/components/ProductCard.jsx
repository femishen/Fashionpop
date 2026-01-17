import "./ProductCard.css";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, onAddToCart, hideCartBtn }) => {
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const { cart } = useCart();

  const isInCart = cart.some(
    (item) => item._id === product._id
  );

  const toggleWishlist = () => {
    isInWishlist(product._id)
      ? removeFromWishlist(product._id)
      : addToWishlist(product);
  };

  return (
    <div className="product-card">
      <div className="image-box">
        <span
          className="wishlist-icon"
          onClick={toggleWishlist}
        >
          {isInWishlist(product._id) ? "❤️" : "♡"}
        </span>

        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
        />
      </div>

      <div className="card-body">
        <h4>{product.name}</h4>

        <div className="price">
          <span className="new">${product.price}</span>
        </div>

        {/* ADD TO CART BUTTON */}
        {!hideCartBtn && (
          <button
            className="add-cart-btn"
            disabled={isInCart}
            onClick={() => onAddToCart(product)}
            style={{
              opacity: isInCart ? 0.6 : 1,
              cursor: isInCart ? "not-allowed" : "pointer",
            }}
          >
            {isInCart ? "Added" : "Add to Cart"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
