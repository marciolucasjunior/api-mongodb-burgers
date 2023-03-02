  const mongoose = require('mongoose');

  const MONGODB_URI ='mongodb+srv://marciaolucas7:Dhc7ZwOw37L9zEog@cluster0.xcg9zj0.mongodb.net/make-burger'

   
  mongoose.set('strictQuery', false)
  mongoose.connect(MONGODB_URI)
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err))



