import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Nosotros from './Nosotros'
import Contacto from './Contacto'
import Error from './Error'
import Productos from './Productos';
import Callback from './Callback'
import ProductoShowcase from './ProductoShowcase'
import Header from './Header';
import Nav from './Nav'


import dataProductos from '../data/data.json'





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

                <Nav auth={this.props.auth}/>

                <Switch>
                    
                    <Route exact path="/" render={ (props) => (
                        <Productos
                        busqueda={this.busquedaProducto}
                        productos = {filtrado}
                        />
                    )}/>

                    <Route exact path="/contacto" render={ () => (
                        <Contacto
                            auth = {this.props.auth}

                        />
                    )}/>

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

                    <Route exact path="/callback" render={ (props) => {
                        

                        return (<Callback
                            data={"Algo"}
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