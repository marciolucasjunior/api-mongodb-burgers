const express = require('express');
const app = express();
 require('./models/config/dbConnect');
const Usuario = require('./models/Usuario');
const cors = require('cors');
app.use(cors());
app.use(express.json());


//Rotas de inicio
app.get('/',(req,res)=>{
    res.status(200).send('Api Burger');
});


//Listar Usuarios
app.get('/cadastro',(req,res)=>{
    Usuario.find((err, Usuario)=>{
        res.status(200).json(Usuario);
    }
)});

//Adcionar usuarios
app.post('/cadastro', async (req,res)=>{
   try {
    const burgers = req.body;
    const response = await new Usuario(burgers).save();
    res.json({error:false, burgers:response});

   } catch(err) {
    res.json({error:true,message: err.message});
   }
   
});

//Deletar Usuario
app.post('/deletar_burger/:id', async (req,res)=>{
    try{
           const id = req.params.id;
            await Usuario.findByIdAndDelete(id);
           res.json({error: false});
       } catch(err) {
        res.json({error:true,message: err.message});
       }
});



module.exports = app;