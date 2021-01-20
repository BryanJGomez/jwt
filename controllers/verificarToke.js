const jwt = require('jsonwebtoken');
const config = require('../config/config');

function verifyToken(req, res, next){
  //leemos el token en la cabezera y verificamos so ese token existe
  const token= req.headers['x-access-token']
  //si el token existe dara pasada sino dara un mensaje
  if(!token){
      return res.status(401).json({
          auth:false,
          message: 'No token provaided'
      })
  }
   const decoded = jwt.verify(token, config.secret);
   //extramoe la informacion de el user
    req.userID = decoded.id;
    next();
}

module.exports = verifyToken;