import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mentionslegales from "./pages/Mentionslegales";
import Portefolio from "./pages/Portefolio";
import Services from "./pages/Services";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/mentonslegales">Mentions Légales</Link>
        <Link to="/portefolio">Portefolio</Link>
        <Link to="/services">Mes services</Link>
      </nav>
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/mentionslegales" element={<Mentionslegales />}></Route>
            <Route path="/portefolio" element={<Portefolio />}></Route>
            <Route path="/services" element={<Services />}></Route>
        </Routes>
    </div>
  );
}