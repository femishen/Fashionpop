import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* 🔐 ADMIN LOGIN */
    if (
      usernameOrEmail === "admin" &&
      password === "admin123"
    ) {
      login({ name: "Admin", role: "admin" });
      navigate("/admin");
      return;
    }

    try {
      if (isRegister) {
        // CUSTOMER REGISTER
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            name,
            email: usernameOrEmail,
            password,
          }
        );
        login(data);
        navigate("/");
      } else {
        // CUSTOMER LOGIN
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: usernameOrEmail,
            password,
          }
        );
        login(data);
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>🌈 Welcome to FashionPop</h2>
        <p>Sign in to your account or create a new one</p>

        <div className="toggle">
          <button
            className={!isRegister ? "active" : ""}
            onClick={() => setIsRegister(false)}
          >
            Login
          </button>
          <button
            className={isRegister ? "active" : ""}
            onClick={() => setIsRegister(true)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            placeholder="Email"
            onChange={(e) =>
              setUsernameOrEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {isRegister ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
