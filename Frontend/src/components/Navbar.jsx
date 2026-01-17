import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        🌈 FashionPop
      </Link>

      {/* MENU */}
      <ul className="menu">
        <li><Link to="/women">👗Women</Link></li>
        <li><Link to="/men">👔Men</Link></li>
        <li><Link to="/kids">🧒Kids</Link></li>
        <li><Link to="/infant">👶Infant</Link></li>
      </ul>

      {/* ACTIONS */}
      <div className="actions">
        <Link to="/wishlist">♡</Link>

        <Link to="/cart">
          🛍️ {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>

        {!user ? (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        ) : (
          <div className="user-menu">
            {/* ADMIN / USER BUTTON */}
            <button
              className="user-btn"
              onClick={() => setOpen(!open)}
            >
              {user.role === "admin" ? "Admin" : "👤"}
            </button>

            {open && (
              <div className="dropdown">
                {/* 👑 ADMIN DROPDOWN */}
                {user.role === "admin" && (
                  <>
                    <Link
                      to="/admin/add"
                      onClick={() => setOpen(false)}
                    >
                      ➕ Add Product
                    </Link>

                    <Link
                      to="/admin/products"
                      onClick={() => setOpen(false)}
                    >
                      📦 Manage Products
                    </Link>
                  </>
                )}

                {/* 👤 CUSTOMER DROPDOWN */}
                {user.role === "customer" && (
                  <Link
                    to="/orders"
                    onClick={() => setOpen(false)}
                  >
                    My Orders
                  </Link>
                )}

                <button onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
