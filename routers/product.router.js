const productRouter = require('express').Router();

module.exports= (wagner)=>{

	const productCtrl = wagner.invoke((Product)=>
		require('../controllers/product.controller')(Product));

	//Definir EndPoints
	productRouter.post('/', (req, res)=>{
		productCtrl.create(req, res);
	});

	productRouter.get('/', (req, res)=>{
		productCtrl.getAll(req, res);
	});

	productRouter.get('/:id', (req, res)=>{
		productCtrl.getById(req, res);
	});

	productRouter.delete('/:id', (req, res)=>{
		productCtrl.deleteProduct(req, res);
	});

	return productRouter;
}