/*console.log('ejemplo!');

//export const ejemplo=true;

module.exports={
    ejemplo:true,
    error:false,
    datos:[]
}*/

/*
const authMiddleware= (req,res,next)=>{
    const token=req.query.token;
    console.log(req.query);
    if(token=='123'){
        next();

    }
    else{
        res.status(401).send('Usuario no autorizado');
    }
}*/
/*const listarUsuarios=(req,res)=>{
    console.log(req.query);
    res.send(['Jonh doe']);
};
*//*
module.exports =function(app){

    app.use('/users',authMiddleware);

    app.get('/users',listarUsuarios);
    app.get('/users/new',(req,res)=>{
        res.send('Archivo creado');
    });
}
*/

const router = require('express').Router();
const authMiddleware = require('./scr/middlewares/auth');
const usersController = require('./scr/controllers/users');
const LoginController=require('./scr/controllers/loginController');
const express=require('express');

router.use('',express.json());
//Auth
router.post('/login',LoginController.login);

router.use('/users', authMiddleware);

router.get('/users', usersController.listar);
router.get('/users/:id', usersController.ver);
router.post('/users/', usersController.crear);
router.put('/users/:id', usersController.editar);
router.delete('/users/:id', usersController.eliminar);


module.exports = router;