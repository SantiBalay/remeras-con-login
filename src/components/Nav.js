import React from 'react';
import {NavLink} from 'react-router-dom'

import '../css/Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className="navegacion">
                <NavLink to={'/nosotros'} activeClassName="activo"> Nosotros </NavLink>
                <NavLink to={'/productos'} activeClassName="activo"> Productos </NavLink>
                <NavLink to={'/contacto'} activeClassName="activo"> Contacto </NavLink>
            </nav>
        </div>
    );
};

export default Nav;