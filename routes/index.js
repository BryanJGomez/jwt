//importamos express
const express = require('express');
const router = express.Router();

//llamamos al controlador
const authController = require('../controllers/authController.js');
const verifyToken = require('../controllers/verificarToke');

module.exports = function() {


    //definimos nuestra ruta

    //ruta para signup
    router.post('/signup',
   
     authController.signup
    );

       router.post('/signin',
        
       authController.signin
      );
     

     router.get('/me', verifyToken,
     authController.me
     );

     router.get('/prueba', verifyToken,
        authController.pruebaToken 
    )
     

    return router;//necesitamos que este disponible todas nuestras rutas
}