import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Banner />
  </React.StrictMode>
);
