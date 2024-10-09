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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/payment" element={<ProductPayment />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Registor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
