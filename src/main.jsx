import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./view/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Registration from "./view/Registration/Registration.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  </BrowserRouter>
);
