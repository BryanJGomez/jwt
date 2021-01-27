const mongoose = require('mongoose');
const dotenv = require("dotenv");
//Para la configuracion del .env
dotenv.config();

//conectamos a mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}) 
