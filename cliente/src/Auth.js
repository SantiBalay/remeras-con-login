/* eslint no-restricted-globals : 0 */ //para que anden las globables

import auth0 from 'auth0-js';

import { AUTH_CONFIG } from './auth0-variables';

const AFTER_LOG = '/productos'
class Auth {

    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientID,
        redirectUri: AUTH_CONFIG.redirectUri,
        audience: AUTH_CONFIG.apiURL,
        responseType: 'token id_token',
        scope: 'read:productos',
    })
    

    login = () => {
        this.auth0.authorize()
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err,authResults) => {
            
            if(authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime()) // lo convierto a timestamp
                localStorage.setItem("access_token", authResults.accessToken)
                localStorage.setItem("id_token", authResults.idToken)
                localStorage.setItem("expires_at", expiresAt)
                location.hash = "" // borro del query stream por seguridad
                location.pathname = AFTER_LOG
                console.log("HOLA")
            } else {
                console.log(err)
            }
        })
    }

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at')) // obtengo el timestamp de la validez de la key
        return new Date().getTime() < expiresAt // me fijo si sigue siendo valida
    }

    logout = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("id_token")
        localStorage.removeItem("expires_at")

        location.pathname = AFTER_LOG
    }

    getAccesToken = () => {
        const access = localStorage.getItem('access_token')

        if(!access) {
            return new Error('Hubo algun problema generando el token')
        }
        return access
    }


}
 
export default Auth;