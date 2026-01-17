import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Admin.css";

const AddProduct = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("women");
  const [image, setImage] = useState(null);

  /* 🔁 LOAD EXISTING PRODUCT (EDIT MODE) */
  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:5000/api/products/${productId}`)
        .then(res => {
          setName(res.data.name);
          setPrice(res.data.price);
          setCategory(res.data.category);
        });
    }
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (productId) {
      // ✏️ UPDATE PRODUCT
      await axios.put(
        `http://localhost:5000/api/products/${productId}`,
        { name, price, category }
      );
      alert("Product Updated");
    } else {
      // ➕ ADD PRODUCT
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("image", image);

      await axios.post(
        "http://localhost:5000/api/products",
        formData
      );
      alert("Product Added");
    }

    navigate("/admin/products");
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h3>{productId ? "Edit Product" : "Add Product"}</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      {!productId && (
        <input
          type="file"
          onChange={e => setImage(e.target.files[0])}
          required
        />
      )}

      <input
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="kids">Kids</option>
        <option value="infant">Infant</option>
      </select>

      <button>
        {productId ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default AddProduct;
