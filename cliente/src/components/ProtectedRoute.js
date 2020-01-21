import React from 'react'
import PleaseLog from "./PleaseLog"

import { Route } from 'react-router-dom'



const ProtectedRoute = ( {comp: Component, ...rest}) => {

        return (
                <Route {...rest} render = { (props) => {
                    
                    if( rest.auth.isAuthenticated() ) {

                        const idProd = props.match.params.productoId
                        let data

                        if(idProd) {
                             data = rest.productos[idProd]
                        }

                         return(
                            <Component
                                 data={data} // por si es showcase producto
                                 {...rest}
                            />
                        )
                   } else {
                       return (
                            <PleaseLog
                            auth = {rest.auth}
                        />
                      )
                    }
                  }
                }
            />
        )

   
};

export default ProtectedRoute;