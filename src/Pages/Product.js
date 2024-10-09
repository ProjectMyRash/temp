import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const allProducts = response.data.data || []; // Use optional chaining and fallback value

        console.log("Fetched Products:", allProducts);

        setProducts(allProducts);
        setFilteredProducts(allProducts);

        // Extract unique categories from products
        const uniqueCategories = [
          "All",
          ...new Set(allProducts.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle category change
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      // Filter products based on selected category
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container mt-3 mb-3">
      <select
        className="form-select form-select-lg mb-3"
        aria-label="Select category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories && categories.map((category, index) => (
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
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products available.</p> // Fallback message
        )}
      </div>
    </div>
  );
}

export default Product;
