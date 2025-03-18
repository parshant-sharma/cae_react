import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import AppRoute from "./routing/AppRoute"; // Import AppRoute
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap AppRoute with BrowserRouter */}
      <AppRoute />
    </Router>
  );
}

export default App;
