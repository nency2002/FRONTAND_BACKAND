const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.schema');


const Signup=async(req,res)=>{
    try {
        let {name,email, password}= req.body;
        let data = await User.findOne({ email: email});
        if(data){
            return res.send({msg:'User Already Registered'})
        }
        else{
            bcrypt.hash(password,5,async(err,hash)=>{
                if(err){
                    return res.send({Error: err.message})
                }
                else{
                    let obj={name:name, email:email, password:hash}
                    let data = await User.create(obj);
                    let token = jwt.sign({id:data.id}, "token");
                    res.json({token:token, data:data});
                }
            })
        }
    } catch (error) {
        return res.status({Message:error.message});
    }
}

const Login = async(req,res)=>{
    try {
        let {email, password}= req.body;
        let data = await User.findOne({ email: email});
        if(data){
            bcrypt.compare(password,data.password,async(err, result)=>{
                if(err){
                    return res.send({Error: err.message})
                }
                else if(result){
                    let token = jwt.sign({id:data.id}, "token");
                    res.json({token:token,msg:'Login successfully'})
                }
                else{
                    return res.status({Message:'Password incorrent'})
                }
            })
        }
        else{
            return res.status({Message:'User not found'})
        }
    } catch (error) {
        return res.status({Message:error.message});
    }
}
module.exports={Signup , Login} 