import React from 'react';
import {NavLink} from 'react-router-dom'

import '../css/Nav.css'

const Nav = (props) => {

    let logeo = (!props.auth.isAuthenticated())  ? ( <NavLink to={'/callback'} onClick={props.auth.login} activeClassName="activo"> Log In </NavLink> )
                                                : ( <NavLink to={'/'} onClick={props.auth.logout}> Log Out </NavLink> )



    return (
        <div>
            <nav className="navegacion">
                <NavLink to={'/nosotros'} activeClassName="activo"> Nosotros </NavLink>
                <NavLink to={'/productos'} activeClassName="activo"> Productos </NavLink>
                <NavLink to={'/contacto'} activeClassName="activo"> Contacto </NavLink>

                {logeo}
                        
            </nav>
        </div>
    );
};

export default Nav;