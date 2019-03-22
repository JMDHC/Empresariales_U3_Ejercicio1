const app = require('../server');

//Configurando el servidor
const server = require('http').Server(app);
const port = 3000;
//Ejecutar el servidor
server.listen(port);
console.log('Running on port '+port);