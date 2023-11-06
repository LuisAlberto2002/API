const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("./rutas");
//const jwt=require('jsonwebtoken');
const rutas=require('./rutas');
//rutas(app);
const dotenv =require('dotenv');
require('dotenv').config();

//const secret=process.env.KEY;

const port=process.env.PORT || 3000;
app.use('',rutas);
app.get('',(req,res)=>{
    res.send('Apli Works');
    /*const token=jwt.sign({id:1,email:'ejemplo@email.com'},secret);
    console.log('Token: ',token);*/
    console.log('recibi una peticion');

})
app.get('/validate',(req,res)=>{
    const token=req.query;
    jwt.verify(token,secret,(err,decode)=>{
        if(err){
            res.sendStatus(400).send('Token no valido');

        }else{
            res.send(decode);
        }

    })

})

//const mongoUrl='mongodb+srv://VulpesBlack:36944757Ara@vbdb.7dcjohk.mongodb.net/VBCompany?retryWrites=true&w=majority';
const mongoUrl=process.env.MONGO_URL;
//console.log(mongoUrl);
mongoose.connect(mongoUrl).then(client=>{
    app.listen(port,()=>{
        console.log('Port: '+port);
    
    
    });
}).catch(err=>{
    console.log('Error de conexion',err);
});






