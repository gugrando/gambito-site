import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import das paginas
import Menu from "./components/Menu";
import Footer from "./components/Footer.jsx";
import LinkTree from "./components/LinkTreeX.js";

// 🔹 Criar um wrapper para controlar o Footer
function Layout() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/links" element={<LinkTree />} />
      </Routes>

      {/* Só renderiza o Footer se NÃO for a rota /links */}
      {location.pathname !== "/links" && <Footer />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
