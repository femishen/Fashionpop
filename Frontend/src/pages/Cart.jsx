import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "./CategoryPage.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <section className="category-page">
      <h2>My Cart 🛒</h2>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h3>Your cart is empty</h3>
          <p style={{ margin: "10px 0 20px", color: "#777" }}>
            Add items to your cart to place an order
          </p>
          <button
            className="add-cart-btn"
            style={{ width: "200px" }}
            onClick={() => navigate("/")}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="product-flex">
            {cart.map((item) => (
              <div key={item._id}>
                <ProductCard
                  product={item}
                  onAddToCart={() => {}}
                />

                <div style={{ textAlign: "center", marginTop: "8px" }}>
                  <p>Qty: {item.qty}</p>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#ff4fa3",
                      cursor: "pointer",
                    }}
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CART SUMMARY */}
          <div
            style={{
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            <h3>Total: ${totalPrice.toFixed(2)}</h3>

            <div style={{ marginTop: "20px" }}>
              <button
                className="add-cart-btn"
                style={{ width: "200px", marginRight: "10px" }}
                onClick={clearCart}
              >
                Clear Cart
              </button>
<button
  className="add-cart-btn"
  style={{ width: "200px" }}
  onClick={() =>
    navigate("/orders", {
      state: { cartItems: cart },
    })
  }
>
  Place Order
</button>

            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
