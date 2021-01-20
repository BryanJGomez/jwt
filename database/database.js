const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(respuesta =>{
        console.log('DataBase is connected');
    })