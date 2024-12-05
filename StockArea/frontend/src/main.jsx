import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import HomePage from "./LandingPage/home/HomePage.jsx";
import Signup from "./LandingPage/signup/Signup.jsx";
import SupportPage from "./LandingPage/support/SupportPage.jsx";
import AboutPage from "./LandingPage/about/AboutPage.jsx";
import PricingPage from "./LandingPage/pricing/PricingPage.jsx";
import ProductPage from "./LandingPage/products/ProductPage.jsx";
import Navbar from "./LandingPage/Navbar.jsx";
import Footer from "./LandingPage/Footer.jsx";
import NotFound from "./LandingPage/NotFound.jsx";
import Login from "./LandingPage/signup/Login.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
