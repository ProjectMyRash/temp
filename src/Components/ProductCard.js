import React from 'react';
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  // Limit the description to 100 characters and add '...'
  const shortDescription = product.description.length > 70 
    ? product.description.substring(0, 100) + '...' 
    : product.description;

  return (
    <div className="card h-100 border-1 border-dark">
      <img src={product.image} className="card-img-top" alt={product.name} style={{height: "180px"}} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <p className="card-text">{shortDescription}</p>
        {/* Ensure the Link goes to the correct path */}
        <Link to={`/products/${product._id}`} className="btn btn-outline-primary">
          Buy
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
