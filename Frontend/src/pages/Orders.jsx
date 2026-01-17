import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./CategoryPage.css";

const Orders = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const cartItems = location.state?.cartItems || [];

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // clear cart AFTER order page loads
  useEffect(() => {
    if (cartItems.length > 0) {
      clearCart();
    }
  }, []);

  if (cartItems.length === 0) {
    return (
      <section className="category-page">
        <h2>No Order Found</h2>
        <p>Please place an order from the cart page.</p>
        <button
          className="add-cart-btn"
          style={{ width: "200px" }}
          onClick={() => navigate("/")}
        >
          Go Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="category-page">
      <h2>Order Placed Successfully ✅</h2>

      <p style={{ marginBottom: "20px", color: "#555" }}>
        Thank you for your purchase! Here is your order summary:
      </p>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {cartItems.map((item) => (
          <div
            key={item._id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>
              {item.name} × {item.qty}
            </span>
            <span>
              ${(item.price * item.qty).toFixed(2)}
            </span>
          </div>
        ))}

        <hr />

        <h3 style={{ marginTop: "15px" }}>
          Total: ${totalPrice.toFixed(2)}
        </h3>

        <button
          className="add-cart-btn"
          style={{ marginTop: "20px", width: "200px" }}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </section>
  );
};

export default Orders;
