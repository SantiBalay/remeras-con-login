import React, { Component } from 'react';

import '../css/Buscador.css'

class Buscador extends Component {

    leerBusqueda = (e) => {

        const busqueda = e.target.value

        this.props.busqueda(busqueda)

    }

    render() { 
        return (  
            <form onChange={this.leerBusqueda} className="buscador">
                <input type="text" placeholder="Busqueda"/>
            </form>
        );
    }
}
 
export default Buscador;