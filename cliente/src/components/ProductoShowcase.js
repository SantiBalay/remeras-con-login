import React, { Component } from 'react';

import '../css/ProductoShowcase.css'

class ProductoShowcase extends Component {
   
    state = {  }
    
    render() { 


        if(!this.props.data) {
            return null
        }

        const {descripcion,imagen,nombre,precio} = this.props.data
        
        return ( 
           <div className="info-producto">
                <div className="imagen">
                     <img src={`/img/${imagen}.png`} alt="remera"/>
                </div>

                <div className="info">
                    <h2> {nombre} </h2>
                    <p className="precio">$ {precio}</p>
                    <p> {descripcion} </p>

                </div>
                
           </div>
         );
    }
}
 
export default ProductoShowcase;
