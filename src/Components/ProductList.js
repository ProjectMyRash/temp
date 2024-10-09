import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "../products.json";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]); // New state for categories
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected category

  useEffect(() => {
    // Initialize products and categories
    const allProducts = productsData.products;
    setProducts(allProducts);
    setFilteredProducts(allProducts);

    // Extract unique categories from products
    const uniqueCategories = [
      "All",
      ...new Set(allProducts.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
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
    <div className="container mt-3">
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
        {filteredProducts.map((product, index) => (
          <div className="col" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
