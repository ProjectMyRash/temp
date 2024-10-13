import React, { useState } from "react";
import axios from "axios";
import "../CSS/modals.css";

function Login({ show, handleClose, setIsLoggedIn, setUserName }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [formValidated, setFormValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting immediately
    console.log("Form Submitted"); // Debug: check if this logs correctly
  
    const emailValid = formData.email.trim() !== "";
    const passwordValid = formData.password.trim() !== "";
  
    console.log("Email Valid:", emailValid); // Debug: Check email validation
    console.log("Password Valid:", passwordValid); // Debug: Check password validation
  
    setErrors({
      email: !emailValid,
      password: !passwordValid,
    });
  
    setFormValidated(true);
  
    // Prevent submission if validation fails
    if (!emailValid || !passwordValid) {
      setErrorMsg("Please fill in all fields.");
      console.log("Validation Failed"); // Debug: Check if this triggers
      return;
    }
  
    console.log("Validation Passed"); // Debug: If this logs, validation is fine
    await handleLogin(formData.email,formData.password);
  };
  

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      const data = await response.data;
      
      if (data.success) {
        localStorage.setItem("token", data.authtoken);
        localStorage.setItem("user", JSON.stringify(data.user));
        if (data.user.isAdmin) {
          window.location.href = "/admin";
        } else {
          setIsLoggedIn(true);
          setUserName(data.user.name);
          window.location = "/";
        }
      } else {
        setErrorMsg(data.msg);  // Display error message
        console.log("Login Error:", data.msg);  // Debugging
      }
    } catch (error) {
      console.error("Login Error:", error.response.data);  // Improved error logging
      setErrorMsg(error.response.data.msg);  // Display error message from backend
    }
  };    

  return (
    <div
      className={`modal bg-blur fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center">Login</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
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
                  // id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>

              <div className="col-md-12 form-floating">
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""} ${!errors.password && formData.password ? "is-valid" : ""}`}
                  // id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Password</label>
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
              </div>

              {errorMsg && <p className="text-danger">{errorMsg}</p>}

              <div className="modal-footer">
                <button type="submit" className="btn btn-outline-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
