import React, { useState } from "react";

function Login({ show, handleClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [formValidated, setFormValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value.trim() === "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = formData.email.trim() !== "";
    const passwordValid = formData.password.trim() !== "";

    setErrors({
      email: !emailValid,
      password: !passwordValid,
    });

    setFormValidated(true);

    if (emailValid && passwordValid) {
      alert("Form submitted successfully!");
      handleClose(); // Close the modal on successful submission
    }
  };

  return (
    <div className={`modal fade ${show ? "show" : ""}`} style={{ display: show ? "block" : "none" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form
              className={`row g-3 needs-validation ${formValidated ? "was-validated" : ""}`}
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="col-md-12 form-floating">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""} ${!errors.email && formData.email ? "is-valid" : ""}`}
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
                <div className="invalid-feedback">Please provide a valid email.</div>
              </div>
              <div className="col-md-12 form-floating">
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""} ${!errors.password && formData.password ? "is-valid" : ""}`}
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Password</label>
                <div className="invalid-feedback">Please provide a valid password.</div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
