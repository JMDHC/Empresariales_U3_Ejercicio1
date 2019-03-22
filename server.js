const express = require('express');
const bodyparser = require('body-parser');
const wagner = require('wagner-core');

require('./models/models')(wagner);

//importar productRouter
const productRouter = require('./routers/product.router')(wagner);
const userRouter = require('./routers/user.router')(wagner);

//configuración de servidor express
let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/products', productRouter);
app.use('/users', userRouter);

module.exports=app;