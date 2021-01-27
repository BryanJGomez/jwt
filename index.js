const dotenv = require("dotenv");
//Para la configuracion del .env
dotenv.config();
const express = require('express');
const routes = require('./routes/')

// importamos la base de datos
require ( './database/database' ) ;
const bodyParser = require('body-parser') 



//creamos el servior
const app = express();




//habilitamos el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitamos nuestros routing
app.use('/', routes())



//puerto y arrancamos el servidor

app.listen(process.env.PORT? process.env.PORT : "3000",()=>{
    console.log('Servidor funcionando');
})

