const {Router} = require('express');
const { Signup, Login } = require('../controllers/user.controllers');
const UserRouter = Router();

// Signup
UserRouter.post("/Signup", Signup);

// Login
UserRouter.post("/Login",Login);



module.exports =UserRouter