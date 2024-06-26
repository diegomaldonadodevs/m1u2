import React from "react";
import '../../styles/components/layout/Nav.css'
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li> <NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</NavLink></li>
                    <li> <NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                    <li> <NavLink to="/servicios" className={({ isActive }) => isActive ? "activo" : undefined}>Servicios</NavLink></li>
                    <li> <NavLink to="/galeria" className={({ isActive }) => isActive ? "activo" : undefined}>Galería</NavLink></li>
                    <li> <NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                    <li> <NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );

}

export default Nav;
