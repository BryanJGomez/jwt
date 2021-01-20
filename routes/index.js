//importamos express
const express = require('express');
const router = express.Router();

//llamamos al controlador
const authController = require('../controllers/authController.js');


module.exports = function() {


    //definimos nuestra ruta

    //ruta para signup
    router.post('/signup',
   
     authController.signup
    );

       router.post('/signin',
        
       authController.signin
      );
     

     router.get('/me',
     authController.me
     )
     

    return router;//necesitamos que este disponible todas nuestras rutas
}