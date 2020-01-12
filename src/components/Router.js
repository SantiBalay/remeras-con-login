import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Nosotros from './Nosotros'
import Contacto from './Contacto'
import Error from './Error'
import Productos from './Productos';
import dataProductos from '../data/data.json'

import ProductoShowcase from './ProductoShowcase'
import Header from './Header';

import Nav from './Nav'




class Router extends Component {

    state = { 
        productos : [],
        terminoBusqueda : ''
    }

    componentWillMount() {
        this.setState({
          productos : dataProductos
        })
    }

    busquedaProducto = (busqueda) => {
       
          this.setState({
            terminoBusqueda: busqueda
          })

     }

    
    render() { 

        let productos = [...this.state.productos]

        let busqueda = this.state.terminoBusqueda

        let filtrado

        if (busqueda !== '') {
            filtrado = productos.filter( producto => (
                producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase()) !== -1
            ))
        } else {
            filtrado = productos
        }



        return ( 
            <BrowserRouter>
                    
                <Header/>

                <Nav/>

                <Switch>
                    
                    <Route exact path="/" render={ (props) => (
                        <Productos
                        busqueda={this.busquedaProducto}
                        productos = {filtrado}
                        />
                    )}/>

                    <Route exact path="/contacto" component={Contacto}/>

                    <Route exact path="/nosotros" component={Nosotros}/>

                    <Route exact path="/productos" render={ () => (
                        <Productos
                            productos = {filtrado}
                            busqueda={this.busquedaProducto}

                        />
                    )}/>

                    <Route exact path="/producto/:productoId" render={ (props) => {
                        
                        const idProd = props.match.params.productoId

                        return (<ProductoShowcase
                            data={this.state.productos[idProd]}
                        />)
                    }}
                    />


                    <Route component={Error}/>
                </Switch>
            
            </BrowserRouter>
         );
    }
}
 
export default Router;