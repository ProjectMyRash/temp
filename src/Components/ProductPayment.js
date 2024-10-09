import React from "react";
import { Link, useLocation } from "react-router-dom";

function ProductPayment() {
  const location = useLocation();
  const product = location.state?.product; // Retrieve the product details from the location state

  if (!product) {
    return <h2>No product details available</h2>;
  }

  const shortDescription = product.description.length > 150 
    ? product.description.substring(0, 100) + '...' 
    : product.description;

  return (
    <section style={{ backgroundColor: "rgba(0,0,0,0.24)" }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <div className="card-title d-flex justify-content-between mb-0">
                  <p className="text-muted mb-0">{product.name}</p>
                  <p className="mb-0">${product.price}</p>
                </div>
                <p className="mb-4">{shortDescription}</p>
                <p>Your payment details</p>

                {/* Floating Label Inputs */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    placeholder="1234 5678 1234 5678"
                  />
                  <label htmlFor="cardNumber">Card Number</label>
                </div>

                <div className="row mb-3">
                  <div className="col-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="expireDate"
                        placeholder="MM/YYYY"
                      />
                      <label htmlFor="expireDate">Expire</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="cvv"
                        placeholder="Cvv"
                      />
                      <label htmlFor="cvv">Cvv</label>
                    </div>
                  </div>
                </div>

                <Link     
                to={`/product/payment/orders`}
                  className="btn btn-outline-primary"
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPayment;
