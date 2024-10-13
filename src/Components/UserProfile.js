import React, { useState } from "react";
import Avatar from "react-avatar";
import Login from "./Login";
import Registor from "./Registor";

function UserProfile({ isLoggedIn, setIsLoggedIn, userName, setUserName }) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const handleSignInClose = () => setShowSignIn(false);
  const handleSignUpClose = () => setShowSignUp(false);

  const userButtons = () => (
    <div>
      <button
        className="btn btn-outline-secondary mb-2 mb-sm-0 mx-sm-2"
        onClick={(e) => {
          e.preventDefault();
          setShowSignIn(true);
        }}
      >
        Sign-In
      </button>
      <button
        className="btn btn-outline-secondary mb-2 mb-sm-0 mx-sm-2"
        onClick={(e) => {
          e.preventDefault();
          setShowSignUp(true);
        }}
      >
        Sign-Up
      </button>
    </div>
  );

  return (
    <>
      {isLoggedIn ? (
        <div>
          <div className="d-flex align-items-center">
            <Avatar name={userName} size={40} round={true} className="mx-2" />
            <button className="btn btn-outline-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        userButtons()
      )}
      <Login
        show={showSignIn}
        handleClose={handleSignInClose}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
      />
      <Registor
        show={showSignUp}
        handleClose={handleSignUpClose}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
      />
    </>
  );
}

export default UserProfile;
