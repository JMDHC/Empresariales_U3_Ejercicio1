const status = require('http-status');

let _product;

const getAll = (req, res)=>{
	_product.find({})
        .then(products => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Consulta exitosa",
                detail: products
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Error!!!",
                detail: error
            });
        });
};

const create = (req, res)=>{
	const product = req.body;
	_product.create(product)
	.then(data=>{
		console.log(data);
		res.status(200);
		res.json({
			code: 200,
			msg: "Guardado",
			detail: data
		});
	})
	.catch(err=>{
		console.log(err);
		res.status(400);
		res.json({
			code: 400,
			msg: "No se pudo guardar",
			detail: err
		});
	});
};

const deleteProduct = (req, res)=>{
	const { id } = req.params;
    _product.remove({ _id: id })
        .then(data => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Se eliminó",
                detail: data
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "No se eliminó",
                detail: error
            });
        });
};

const getById = (req, res)=>{
	const id = req.params.id;
    _product.findOne({ _id: id })
        .then(product => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Éxito",
                detail: product
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Éxito",
                detail: error
            });
        });
};

module.exports = (Product)=>{
	_product = Product;
	return({
		getAll, create, deleteProduct, getById
	});
}