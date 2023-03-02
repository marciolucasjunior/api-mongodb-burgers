 const {model,Schema} = require('mongoose');

 const Usuario = model('Usuario',new Schema(
    {
    id:{
      type:Number ,
  
    },
    cliente: {
        type: String,
        required: true
      },
    pao:{
        type: String,
        required: true
      },
    carne:{
        type: String,
        required: true
      },  
    bacon:{
        type: String,
        required: false
      },
    salame:{
        type: String,
        required: false
      },  
    cebola:{
        type: String,
        required: false
      },  
    chedar:{
        type: String,
        required: false
      },  
    pepino:{
        type: String,
        required: false
      },  
    tomate:{
        type: String,
        required: false
      },  
    }
))


 module.exports = Usuario