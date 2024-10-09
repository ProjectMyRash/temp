import React, { useState } from "react";

function Register({ show, handleClose }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    dob: "",
    gender: "option1",
    age: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    password: false,
    email: false,
    dob: false,
    gender: false,
    age: false,
  });

  const [formValidated, setFormValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name || id]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name || id]: value.trim() === "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userValid = formData.username.trim() !== "";
    const passwordValid = formData.password.trim() !== "";
    const emailValid = formData.email.trim() !== "";
    const dateValid = formData.dob.trim() !== "";
    const ageValid = formData.age.trim() !== "";

    setErrors({
      username: !userValid,
      password: !passwordValid,
      email: !emailValid,
      dob: !dateValid,
      age: !ageValid,
    });

    setFormValidated(true);

    if (userValid && passwordValid && emailValid && dateValid && ageValid) {
      alert("Form submitted successfully!");
      handleClose(); // Close the modal on successful submission
    }
  };

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign-Up</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <form
              className={`row g-3 needs-validation ${
                formValidated ? "was-validated" : ""
              }`}
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="col-md-12 form-floating">
                <input
                  type="text"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  } ${!errors.username && formData.username ? "is-valid" : ""}`}
                  id="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="username">Username</label>
                <div className="invalid-feedback">
                  Please provide a valid username.
                </div>
              </div>

              <div className="col-md-12 form-floating">
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  } ${!errors.password && formData.password ? "is-valid" : ""}`}
                  id="password"
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

              <div className="col-md-12 form-floating">
                <input
                  type="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  } ${!errors.email && formData.email ? "is-valid" : ""}`}
                  id="email"
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
                  type="date"
                  className={`form-control ${errors.date ? "is-invalid" : ""} ${
                    !errors.date && formData.date ? "is-valid" : ""
                  }`}
                  id="dob"
                  placeholder="Date of Birth"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="dob">Date of Birth</label>

                <div className="invalid-feedback">
                  Please provide a valid date.
                </div>
              </div>

              <div className="col-md-12 form-floating">
                <input
                  type="date"
                  className={`form-control ${errors.date ? "is-invalid" : ""} ${
                    !errors.date && formData.date ? "is-valid" : ""
                  }`}
                  id="dob"
                  placeholder="Date of Birth"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="dob">Date of Birth</label>

                <div className="invalid-feedback">
                  Please provide a valid date.
                </div>
              </div>

              <div className="col-md-12">
                <label className="form-label">Gender</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="exampleRadios1"
                    value="option1"
                    checked={formData.gender === "option1"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="exampleRadios2"
                    value="option2"
                    checked={formData.gender === "option2"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    Female
                  </label>
                </div>
                <div className="invalid-feedback d-block">
                  {errors.gender && "Please select a gender."}
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
