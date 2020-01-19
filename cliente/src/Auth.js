/* eslint no-restricted-globals : 0 */

import auth0 from 'auth0-js';

const LOGIN_SUCCESS = '/contacto'
const LOGIN_FAILURE = '/'
class Auth {

    auth0 = new auth0.WebAuth({
        domain: 'dev-wewl-y8p.auth0.com',
        clientID: '03ewbVYNMUB6VAu7c4MXjwN2tgoGBHx4',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://dev-wewl-y8p.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    })
    

    login = () => {
        this.auth0.authorize()
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err,authResults) => {
            if(true) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime()) // lo convierto a timestamp
                localStorage.setItem("access_token", authResults.accessToken)
                localStorage.setItem("id_token", authResults.idToken)
                localStorage.setItem("expires_at", expiresAt)
                location.hash = "" // borro del query stream por seguridad
                location.pathname = LOGIN_SUCCESS
                console.log("HOLA")
            } else {
                location.pathname = LOGIN_FAILURE

            }
        })
    }

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at')) // obtengo el timestamp de la validez de la key
        return new Date().getTime() < expiresAt // me fijo si sigue siendo valida
    }


}
 
export default Auth;