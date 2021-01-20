const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchemas = new Schema({
    username:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim:true
    },
    password:{
        type: String,
        trim: true
    }
})

//creamos el metodo para encriptar la pass
userSchemas.methods.encriptacion = async (password)=>{
    const  salt =  await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}
//validamos password

userSchemas.methods.validatePassword = function(password) {
    return bcrypt.compare(password,  this.password)
}
module.exports = mongoose.model('User', userSchemas)