import React from 'react';
import {Link} from 'react-router-dom'

import '../css/LogIn.css'

const PleaseLog = (props) => {
    return (
            <div className="contenedor-button"> 
                <p> Para ver el contenido de la pagina, tenes que estar logeado</p>
                <button className="button" onClick={props.auth.login}> Iniciar Sesion </button>  
            </div>     
    );
};

export default PleaseLog;