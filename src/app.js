const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


//Rotas de inicio
app.get('/',(req,res)=>{
    res.status(200).send('Api Burger');
});


module.exports = app;