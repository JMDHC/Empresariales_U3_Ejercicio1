const mongoose = require('mongoose');

//Construyendo el esquema
const userSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	}
});

//Modelo
const userModel = mongoose.model('Usuarios', userSchema, 'usuarios');

module.exports= userModel;