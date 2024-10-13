import React, { useState, useEffect } from 'react';

function ProductModal({ show, onClose, onSubmit, initialData }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  useEffect(() => {
    if (initialData) {
      setProduct(initialData);
    } else {
      setProduct({
        name: '',
        price: '',
        description: '',
        image: '',
        category: '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent click events from bubbling up to the modal background
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} onClick={onClose}>
      <div className="modal-dialog" onClick={handleModalClick}> {/* Added click handler here */}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{initialData ? 'Edit Product' : 'Add Product'}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="formProductName"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="formProductName">Name</label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="formProductPrice"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="formProductPrice">Price</label>
              </div>
              <div className="mb-3 form-floating">
                <textarea
                  className="form-control"
                  id="formProductDescription"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                  style={{ height: '100px' }} // Adjust height as needed
                />
                <label htmlFor="formProductDescription">Description</label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="formProductImage"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="formProductImage">Image URL</label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="formProductCategory"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="formProductCategory">Category</label>
              </div>
              <button type="submit" className="btn btn-primary">
                {initialData ? 'Update Product' : 'Add Product'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
