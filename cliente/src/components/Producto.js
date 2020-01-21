import React, { Component } from 'react';

import {Link} from 'react-router-dom'


class Producto extends Component {
   
    state = {  }
    
    render() { 

        const {id,imagen,nombre,precio} = this.props.data
        
        return ( 
            <li>
                <img src={`/img/${imagen}.png`} alt="remera"/>
                <p> {nombre} <span> $ {precio} </span> </p>
                <Link to={`/producto/${id}`}> Mas info </Link>
            </li>
         );
    }
}
 
export default Producto;
