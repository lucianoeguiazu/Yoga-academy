import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/layout/Nav.css";

const Nav = (props) => {
    return (
       
        <div className="navegacion">
            <ul>
                <li><NavLink activeclassname="activo" exact to= "/">Home</NavLink></li>
                <li><NavLink activeclassname="activo" exact to= "/Nosotros">Nosotros</NavLink></li>   
                <li><NavLink activeclassname="activo" exact to= "/Clases">Clases</NavLink></li>   
                <li><NavLink activeclassname="activo" exact to= "/Contacto">Contacto</NavLink></li>
                <li><NavLink activeclassname="activo" exact to= "/Crud">Alummoos</NavLink></li>
            </ul>
        </div>
    );
}

export default Nav;