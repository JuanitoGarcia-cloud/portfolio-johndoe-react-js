import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portefolio from "./pages/Portefolio";
import Contact from "./pages/Contact";
import Mentionslegales from "./pages/Mentionslegales";

export default function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-dark text-light text-uppercase fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand text-light" href="#page-top">John Doe</a>
          <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto text-uppercase">
              <li class="nav-item mx-0 mx-lg-1">
                <div class="nav-link py-3 px-0 px-lg-3 text-light rounded actif">
                  <Link to="/">Home</Link>
                </div>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <div class="nav-link py-3 px-0 px-lg-3 text-light rounded">
                  <Link to="/services">Services</Link>
                </div>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <div class="nav-link py-3 px-0 px-lg-3 rounded">
                  <Link to="/portefolio">Portefolio</Link>
                </div>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <div class="nav-link py-3 px-0 px-lg-3 rounded">
                  <Link to="/contact">Contact</Link>
                </div>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <div class="nav-link py-3 px-0 px-lg-3 rounded">
                  <Link to="/mentonslegales">Mentions Légales</Link>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/portefolio" element={<Portefolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/mentionslegales" element={<Mentionslegales />}></Route>
      </Routes>
    </div>
  );
}