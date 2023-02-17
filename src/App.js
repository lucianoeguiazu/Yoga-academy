import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Clases from "./pages/Clases";
import Home from "./pages/Home";
import Formulario from './pages/Formulario';
import Crud from "./pages/Crud";

function App() {
  return (
    <div className="App">
      
      
      <Header/>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/clases" element={<Clases/>}/>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/Crud" element={<Crud />} />
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}



export default App;

