const express = require('express');
const routes = require('./routes/')
//importamos la base de datos
require('./database/database');
//importamos bodyparse
const bodyParser = require('body-parser') 

//creamos el servior
const app = express();



//habilitamos el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitamos nuestros routing
app.use('/', routes())


//puerto y arrancamos el servidor
const host =  '0.0.0.0';
const port =  4000;

app.listen(port, host, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
