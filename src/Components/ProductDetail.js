import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../products.json';

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.products.find((p) => p._id === Number(id)); // Use string comparison

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <Link to="/products/payment" state={{ product }} className="btn btn-success">Buy Now</Link> {/* Updated */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
