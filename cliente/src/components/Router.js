import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Axios from 'axios'

import Nosotros from './Nosotros'
import Contacto from './Contacto'
import Productos from './Productos';
import Callback from './Callback'
import ProductoShowcase from './ProductoShowcase'
import Header from './Header';
import Nav from './Nav'

import ProtectedRoute from './ProtectedRoute';

class Router extends Component {

    state = { 
        productos : [],
        terminoBusqueda : ''
    }

    queryAPI = () => { // Le pego a mi serverExpress con el auth token que genero en el logeo. 

        const headers = {
            'Authorization': `Bearer ${this.props.auth.getAccesToken()}`
        }

        const url = 'http://localhost:5000/productos'

        Axios.get(url, {headers})
            .then( response =>  this.setState({
                productos: response.data
            }) 
            
            )

    }

    componentWillMount() {
        this.queryAPI()
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

                    {/* <Route exact path="/producto/:productoId" render={ (props) => {
                        
                        const idProd = props.match.params.productoId

                        return (<ProductoShowcase
                            data={this.state.productos[idProd]}
                        />)
                    }}
                    /> */}

                    <ProtectedRoute
                        exact path="/producto/:productoId"
                        auth = {this.props.auth}
                        comp={ProductoShowcase}
                        productos={this.state.productos}
                    />

                    <ProtectedRoute
                        exact path="/productos"
                        auth = {this.props.auth}
                        comp={Productos}
                        busqueda={this.busquedaProducto}
                        productos = {filtrado}
                    />

                    <ProtectedRoute
                        exact path="/"
                        auth = {this.props.auth}
                        comp={Productos}
                        busqueda={this.busquedaProducto}
                        productos = {filtrado}
                    />

                    <ProtectedRoute
                        exact path="/nosotros"
                        auth = {this.props.auth}
                        comp={Nosotros}                   
                    />

                    <ProtectedRoute
                        exact path="/contacto"
                        comp={Contacto}
                        auth = {this.props.auth}
                    />

                    <Route exact path="/callback" render={ (props) => {
                        return (
                                <Callback
                                    pegarleApi = {this.queryAPI}
                                 />
                        )
                    }}
                    />



                </Switch>
            
            </BrowserRouter>
         );
    }
}
 
export default Router;