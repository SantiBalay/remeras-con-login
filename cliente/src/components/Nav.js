import React from 'react';
import {NavLink} from 'react-router-dom'

import '../css/Nav.css'

const Nav = (props) => {
    return (
        <div>
            <nav className="navegacion">
                <NavLink to={'/nosotros'} activeClassName="activo"> Nosotros </NavLink>
                <NavLink to={'/productos'} activeClassName="activo"> Productos </NavLink>
                <NavLink to={'/contacto'} activeClassName="activo"> Contacto </NavLink>
                <NavLink to={'/redirect'} onClick={props.auth.login} activeClassName="activo"> Contacto </NavLink>
            </nav>
        </div>
    );
};

export default Nav;