import React from "react";
import "../styles/components/pages/Clases.css";
import { Link } from 'react-router-dom';

const Clases = (props) => {
    return (
    <main>
        
    <h1> ¿Que esperas para sumarte a nuestras clases? </h1>

    <div className="contenedor">
        <div className="clase">
            <h2>Yoga: Hatha yoga </h2>
            <h2>Profesor/a: Alicia </h2>
            <h4>Caracteristicas</h4>
            <ul>
                <li>Fortalecimiento del cuerpo</li>
                <li>Libera la ansiedad</li>
                <li>Reduce el estres</li>
                <li>Mejora tu postura</li>
            </ul>
                 
        </div>
        <div className="clase">

            <h2>Yoga: Integral Yoga</h2>
            <h2>Profesor/a: Juan </h2>
            <h4>Caracteristicas</h4>
            <ul>
                <li>Mejora la respiracion</li>
                <li>Conectas con tu cuerpo</li>
                <li>Entras en estado presencia</li>
                <li>Autoconocimiento</li>
            </ul> 
         
        </div>
        <div className="clase">

            <h2>Yoga: Ashtanga vinyasa</h2>
            <h2>Profesor/a: Pedro </h2>
            <h4>Caracteristicas</h4>
            <ul>
                <li>Mejora tu fuerza</li>
                <li>Mejora tu enlongacion</li>
                <li>Mejora la resitencia</li>
                <li>Desarrolla la capacidad respiratoria</li>
            </ul>            
        </div>
      
    </div>
    <div className="boton">
        <Link to="/Formulario">
            <button className="botones">Inscibite aqui</button>
        </Link> 
    </div>
    </main>
)
    }

export default Clases;
