//exportamos nuestros modelos
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config  = require('../config/config');
const verifyToken = require('./verificarToke');


exports.signup = async (req, res, next)=>{
//crear objeto de paciente con datos con req.body
        const {username, email, password} = req.body;
        const user = new User({
            username ,
            email,
            password
        });
        //hacemos llamado a el metodo que esta en el modelo
        //para la encriptacion de el password
        user.password = await user.encriptacion(password);
        //guardamos en la base de datos
        await user.save();
        //hacemos uso de el token
      const toketn =  jwt.sign({id: user._id}, config.secret,{
            expiresIn: 60 * 60 * 24//el tiempo que va a expirar el token
        });

        res.json({auth: true, toketn});
}


exports.signin = async (req, res, next)=>{
    const { email, password} = req.body;
    
    const user = await User.findOne({email: email});
    if (!user) {
        return res.status(404).send("the email dosen't exists");
    }

    const validar = await user.validatePassword(password);
    //si el email y password son correctos le geneamos un token al usuario
    if(!validar){
      return res.status(401).json({auth: false, toketn: null});
    }
    const token = jwt.sign({id: user.id}, config.secret,{
        expiresIn: 60*60*24
    })

     res.json({auth: true, token})
}


exports.me = async (req, res, next) =>{
   

     const user = await User.findById(req.userID, {password: 0});
     if (!user) {
        return res.status(404).send('No user found');
     }
     
    res.json(user);
}

exports.pruebaToken = async(req, res, next)=>{
    
    const user = await User.findById(req.userID, {password:0});
    if(!user){
        return res.status(404).send('No user found');
    }
    res.json(user)
}