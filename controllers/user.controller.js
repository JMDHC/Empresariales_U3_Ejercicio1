const status = require('http-status');

let _user;

const getAll = (req, res)=>{
	_user.find({})
        .then(users => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Consulta exitosa",
                detail: users
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
	const user = req.body;
	_user.create(user)
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

const deleteUser = (req, res)=>{
	const { id } = req.params;
    _user.remove({ _id: id })
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
    _user.findOne({ _id: id })
        .then(user => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Éxito",
                detail: user
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

const login = (req, res)=>{
    const user = req.body;
    console.log(user);
    _user.find(user)
        .then(users => {
            if(users.length==1){
                res.status(200);
                res.json({
                    code: 200,
                    msg: "Login Correcto",
                    detail: users
                });
            }else{
                res.status(400);
                res.json({
                    code: 400,
                    msg: "usuario no encontrado"
                });
            }
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Error",
                detail: error
            });
        });
};

module.exports = (User)=>{
	_user = User;
	return({
		getAll, create, deleteUser, getById, login
	});
}