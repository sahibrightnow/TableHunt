/*
  A very basic app to demonstrate JSON Web Token being used in OpenIDConnect using Google as an account provider
  This is a command line app, run with "node app.js <id token>"
*/

var jwt = require('jsonwebtoken');
var jwkToPem = require('jwk-to-pem');
var fetch = require('node-fetch');

// The function to validate a JWT.  
//
// For teaching purposes, the function is completely async
// and throws no exceptions.  
//
// In a production system, you'll want manage it differently
// 
module.exports = async function validateJwt(req, res) {

    // First need to find out which key id is being used, we can get this from the header
    let token = req.header.token;
    let d = jwt.decode(token, { complete: true });
    let kid = d.header['kid'];

    // Retreive the public keys from google
    data = await fetch('https://www.googleapis.com/oauth2/v3/certs');
    certs = await data.json();

    // Find the correct key
    let key = certs.keys.filter(c => c.kid == kid);

    // we now need to convert the certificate to pem format
    let pem = jwkToPem(key[0]);

    // We use the PEM cert to verify the token is signed by google
    try {
        let result = await jwt.verify(token, pem);
        req.user = result;
        return next();
    } catch (e) {
        console.log(JSON.parse(`{ "${e.name}": "${e.message}"}`));
        return res.sendStatus(401);
    }
}