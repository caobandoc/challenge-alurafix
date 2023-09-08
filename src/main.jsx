import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Footer />
  </React.StrictMode>
);
