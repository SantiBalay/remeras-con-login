import express from 'express'
import jwt from 'express-jwt'
import jwks from 'jwks-rsa'
import cors from 'cors'
import jwtAuthz from 'express-jwt-authz'
import bodyParser from 'body-parser'

import dataProductos from './data.json'

//Creo el sv

const app = express();

//Configuro para json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors()); // Para que se pueda consumir desde otro lado sin que llore

// valido web token

const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-wewl-y8p.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://productos',
    issuer: 'https://dev-wewl-y8p.auth0.com/',
    algorithms: ['RS256']
});

// valido los scopes

const checkScopes = jwtAuthz(['read:productos']); // lo que esta en el Auth0

app.get('/productos', jwtCheck, checkScopes, (req,res) => {
    let productos = dataProductos

    res.json(productos)
})

app.listen(5000, () => {
    console.log('Servidor andando...')
})