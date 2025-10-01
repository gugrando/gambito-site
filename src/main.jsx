import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import das paginas
import Menu from "./components/Menu";
import Footer from './components/Footer.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/menu" state={{type: "comidas"}} element={<Menu />} />
      <Route path="/menu" state={{type: "drinks"}} element={<Menu />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
