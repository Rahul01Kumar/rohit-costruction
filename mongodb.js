const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/contact us")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const contactUsSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
  });
  
  const collection = mongoose.model('collection', contactUsSchema);
  
  module.exports = collection;