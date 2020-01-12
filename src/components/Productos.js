import React, { Component, Fragment } from 'react';

import Producto from './Producto'
import Buscador from './Buscador'

import '../css/Productos.css'

class Productos extends Component {

    render() { 


        const productos = this.props.productos

        return (  


            <Fragment>
                <Buscador
                    busqueda = {this.props.busqueda}
                />

                <div className="productos">
                    <h2> Nuestros Productos </h2>

                    <ul className="lista-productos">
                        {productos.map( producto => {
                        return <Producto key={producto.id} data={producto}/>
                        })}
                    </ul>
                </div>
            </Fragment>
        );
    }
}
 
export default Productos;