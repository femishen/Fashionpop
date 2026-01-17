import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "./CategoryPage.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product);                 // ✅ add to cart
    removeFromWishlist(product._id);    // ✅ remove from wishlist
  };

  return (
    <section className="category-page">
      <h2>My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "60px" }}>
          Your wishlist is empty
        </p>
      ) : (
        <div className="product-flex">
          {wishlist.map((item) => (
            <ProductCard
              key={item._id}
              product={item}
              onAddToCart={handleMoveToCart}  // 🔥 IMPORTANT
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;
