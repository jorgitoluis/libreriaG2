const {leerJSON,escribirJSON} = require('../data');
//const Producto = require('./Producto');

module.exports = {
      listar : require('./listar'),
      agregar:  require('./agregar'),
      filtrar :  require('./filtrar'),
      editar : require('./editar'),
      buscar :  require('./buscar')
    };