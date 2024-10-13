import React, { useState } from "react";
import axios from "axios";
import "../CSS/modals.css";

function Registor({ show, handleClose, setIsLoggedIn, setUserName  }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    dob: false,
    gender: false,
  });

  const [formValidated, setFormValidated] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    console.log(id, value);

    if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        gender: value, // Update gender based on selected radio button
      }));
      console.log("Gender updated to: ", value);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: value.trim() === "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameValid = formData.name.trim() !== "";
    const emailValid = formData.email.trim() !== "";
    const passwordValid = formData.password.trim() !== "";
    const passwordsMatch = formData.password === formData.confirmPassword;
    const dobValid = formData.dob.trim() !== "";
    const genderValid = formData.gender !== "";

    setErrors({
      name: !nameValid,
      email: !emailValid,
      password: !passwordValid,
      confirmPassword: !passwordsMatch,
      dob: !dobValid,
      gender: !genderValid,
    });

    setFormValidated(true);

    if (
      !nameValid ||
      !emailValid ||
      !passwordValid ||
      !passwordsMatch ||
      !dobValid ||
      !genderValid
    ) {
      setErrorMsg("Please fill in all fields correctly.");
      return;
    }

    await handleRegister();
  };

  const handleRegister = async () => {
    try {
      const response =await axios.post("http://localhost:5000/api/users/", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        dob: formData.dob,
        gender: formData.gender,
      });

      const { authtoken, user } = response.data;

      setUserName(formData.name);
      setIsLoggedIn(true); // Log the user in
      localStorage.setItem("token", authtoken); // Store the received token
      localStorage.setItem("user", user.name);
      setErrorMsg("");
      handleClose();
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message ||
          "Registration failed! Please try again."
      );
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
            <h5 className="modal-title">Register</h5>
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
              {/* Username field */}
              <div className="col-md-12 form-floating">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""} ${
                    !errors.name && formData.name ? "is-valid" : ""
                  }`}
                  id="name"
                  placeholder="Name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Name</label>
                <div className="invalid-feedback">
                  Please provide a valid name.
                </div>
              </div>

              {/* email field */}
              <div className="col-md-12 form-floating">
                <input
                  type="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  } ${!errors.email && formData.email ? "is-valid" : ""}`}
                  id="email"
                  placeholder="Email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>

              {/* password field */}
              <div className="col-md-12 form-floating">
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  } ${!errors.password && formData.password ? "is-valid" : ""}`}
                  id="password"
                  placeholder="Password"
                  value={formData.password || ""}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Password</label>
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
              </div>

              {/* confirm password field */}
              <div className="col-md-12 form-floating">
                <input
                  type="password"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  } ${
                    !errors.confirmPassword && formData.confirmPassword
                      ? "is-valid"
                      : ""
                  }`}
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword || ""}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="invalid-feedback">
                  {formData.password !== formData.confirmPassword
                    ? "Passwords do not match"
                    : "Please confirm your password"}
                </div>
              </div>

              {/* date field */}
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

              {/* gender field */}
              <div className="col-md-12">
                <label className="form-label">Gender</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="genderMale"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderMale">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="genderFemale"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderFemale">
                    Female
                  </label>
                </div>
                <div className="invalid-feedback d-block">
                  {errors.gender && "Please select a gender."}
                </div>
              </div>

              {errorMsg && <p className="text-danger">{errorMsg}</p>}

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

export default Registor;
