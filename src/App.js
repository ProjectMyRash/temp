import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import ProductDetail from "./Components/ProductDetail";
import ProductPayment from "./Components/ProductPayment";
import HomePage from "./Pages/HomePage";
import Login from "./Components/Login";
import Registor from "./Components/Registor";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import AdminPanel from "./Components/AdminPanel";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Check for user session when the app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
  
  if (token && user) {
      try {
        const parsedUser = JSON.parse(user);
        // Ensure parsedUser is an object with the expected structure
        if (parsedUser && parsedUser.name) {
          setIsLoggedIn(true);
          setUserName(parsedUser.name);
        } else {
          console.error("User data is not in the expected format:", parsedUser);
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    } else {
      console.log("Token or user data not found in localStorage");
    }
  }, []);
  
  

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/payment" element={<ProductPayment />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
        <Route path="/signup" element={<Registor setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
