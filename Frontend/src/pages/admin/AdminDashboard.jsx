import { Link } from "react-router-dom";
import "./Admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>

      <div className="admin-actions">
        <Link to="/admin/add">➕ Add Product</Link>
        <Link to="/admin/products">📦 Manage Products</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
