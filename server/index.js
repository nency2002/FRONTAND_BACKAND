const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser');
const Connect = require('./config/database');
const UserRouter = require('./routes/user.route');
const ProductRouter = require('./routes/product.route');
const app = express();
app.use(express.json());
app.use(cors())
app.use(cookie());
require('dotenv').config()


app.use("/User" , UserRouter);
app.use("/Product" , ProductRouter)
Connect();
app.listen(process.env.PORT, ()=>{
    console.log(`server start`);
})
