
const Razorpay = require('razorpay');
const Product = require('../models/product.schema');

require("dotenv").config();



const Create =async(req,res)=>{
    try {
        let data = await Product.create(req.body);
        res.send(data);
    } catch (error) {
        return res.send({Error : error.message});
    }
}
const All = async(req, res)=>{
    try {
        let data = await Product.find();
        res.send(data)
    } catch (error) {
        return res.send({Error : error.message});
    }
}
// payments
var razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  const Payments = async (req, res) =>{
        let {amount} = req.body
        let options ={
            amount : amount*100,
        }
        razorpay.orders.create(options , (err, order) =>{
            if(err){
                console.log(err);
                res.send({data : err.message});
            }
            else{
                res.send(order)
            }
        })
  }

module.exports ={Create,All, Payments}