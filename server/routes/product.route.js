const {Router} = require('express');
const { Create, All, Payments } = require('../controllers/product.controllers');
const ProductRouter = Router();

// post router
ProductRouter.post("/Create", Create);

// all get
ProductRouter.get("/All", All);

// payment
ProductRouter.post("/Payment", Payments);

module.exports =ProductRouter