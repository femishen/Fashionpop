import { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    price: "",
    category: "women",
  });

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const startEdit = (product) => {
    setEditId(product._id);
    setEditData({
      name: product.name,
      price: product.price,
      category: product.category,
    });
  };

  const cancelEdit = () => {
    setEditId(null);
  };

const saveEdit = async (id) => {
  try {
    await axios.put(
      `http://localhost:5000/api/products/${id}`,
      editData
    );

    setEditId(null);
    fetchProducts();
  } catch (err) {
    console.error(err);
    alert("Update failed");
  }
};


  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="admin-list">
      {products.map((p) => (
        <div key={p._id} className="admin-item">
          <img src={`http://localhost:5000${p.image}`} alt={p.name} />

          {editId === p._id ? (
            <>
              <input
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
              />

              <input
                value={editData.price}
                onChange={(e) =>
                  setEditData({ ...editData, price: e.target.value })
                }
              />

              <select
                value={editData.category}
                onChange={(e) =>
                  setEditData({ ...editData, category: e.target.value })
                }
              >
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kids">Kids</option>
                <option value="infant">Infant</option>
              </select>

              <button
                className="save-btn"
                onClick={() => saveEdit(p._id)}
              >
                💾 Save
              </button>

              <button
                className="cancel-btn"
                onClick={cancelEdit}
              >
                ✖ Cancel
              </button>
            </>
          ) : (
            <>
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <p>{p.category}</p>

              <button
                className="edit-btn"
                onClick={() => startEdit(p)}
              >
                ✏️ Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteProduct(p._id)}
              >
                ❌ Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;
