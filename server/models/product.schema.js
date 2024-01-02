const mongoose = require('mongoose');

const ProductSchema= new mongoose.Schema({
    image:String,
    title:String,
    desc:String,
    price:String,
    catogory:String
})
const Product = mongoose.model("Product", ProductSchema);

module.exports =Product