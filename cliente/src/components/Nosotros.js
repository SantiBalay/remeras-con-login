
import React from 'react';

import '../css/Nosotros.css'

const Nosotros = (props) => {
    return (
        <div className="contenedor-nosotros">   


           <div className="imagen">
                    <img src="/img/camisa_8.png" alt="remera"/>
                </div>

            <div className="contenido">
                <h2> Lorem ipsum dolor sit amet </h2>

                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis, massa a tincidunt interdum, leo ipsum viverra nunc, ut interdum magna diam sed tortor. Nulla vulputate non arcu at viverra.
                </p>
            </div>
        </div>
    );
};

export default Nosotros;