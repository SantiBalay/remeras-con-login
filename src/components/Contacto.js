import React, { Component } from 'react';

import '../css/Contacto.css'
class Contacto extends Component {
    state = {  }
    
    enviar = (e) => {
        e.preventDefault()
        e.currentTarget.reset()
    }

    render() {
        return (
                <form onSubmit={this.enviar}>
                    <legend> Formulario de Contacto</legend>

                    <div className="input-field">
                        <label> Nombre: </label>
                        <input type="text" placeholder="Tu nombre"/>
                    </div>

                    <div className="input-field">
                        <label> Email: </label>
                        <input type="email" placeholder="Tu email"/>
                    </div>

                    <div className="input-field">
                        <label> Mensaje: </label>
                        <textarea> </textarea>
                    </div>

                    <div className="input-field enviar">
                        <input type="submit" value="Enviar"/>
                    </div>

                </form>
            );
        }
}
 
export default Contacto;