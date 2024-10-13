import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null); // For editing product
  const [isAdmin, setIsAdmin] = useState(true); // Change this to your actual admin check

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/admin", {
          headers: {
            authtoken: `Bearer ${localStorage.getItem('token')}`, // Replace with your auth token logic
          },
        });
        setIsAdmin(response.data.isAdmin); // Assuming the API returns an object with an isAdmin key
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    };
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const allProducts = response.data.data || [];
        setProducts(allProducts);
        setFilteredProducts(allProducts);
  
        const uniqueCategories = [
          "All",
          ...new Set(allProducts.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchAdminStatus(); // Check admin status
    fetchProducts(); // Fetch products
  }, []);
  

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handleOpenModal = (product = null) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const handleAddOrUpdateProduct = async (product) => {
    try {
      if (currentProduct) {
        // Update product
        await axios.put(
          `http://localhost:5000/api/products/${currentProduct._id}`,
          product
        );
        alert("Product updated successfully");
      } else {
        // Create product
        await axios.post("http://localhost:5000/api/products", product);
        alert("Product added successfully");
      }

      // Refresh the products
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data.data || []);
      handleCloseModal();
    } catch (error) {
      console.error("Error adding/updating product:", error);
      alert("Failed to add/update product. Please try again.");
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      alert("Product deleted successfully");
      const updatedProducts = products.filter(
        (product) => product._id !== productId
      );
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mb-3">
      {isAdmin && (
        <>
          <h3 className="bg-dark text-white text-center p-3" style={{ width: "100%" }}>
            Admin Page
          </h3>
          <button
            className="btn btn-outline-success mb-3"
            onClick={() => handleOpenModal()}
          >
            Add Product
          </button>
        </>
      )}
      
      <select
        className="form-select form-select-lg mb-3"
        aria-label="Select category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Product Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col" key={product._id}>
              <ProductCard
                product={product}
                onEdit={isAdmin ? () => handleOpenModal(product) : null}
                onDelete={
                  isAdmin ? () => handleDeleteProduct(product._id) : null
                }
              />
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      {/* Modal for Add/Edit Product */}
      <ProductModal
        show={showModal}
        onClose={handleCloseModal}
        onSubmit={handleAddOrUpdateProduct}
        initialData={currentProduct}
      />
    </div>
  );
}

export default AdminPanel;
