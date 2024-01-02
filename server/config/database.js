const mongoose = require('mongoose');
require("dotenv").config();

const Connect = async()=>{
    await mongoose.connect(process.env.DB_URL);
    console.log("mongodb connected successfully")
}

module.exports =Connect