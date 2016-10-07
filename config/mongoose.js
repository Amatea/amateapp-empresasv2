// Invocar el modo 'strict' de JavaScript
'use strict';

// Carga las dependencias del módulo
var	config = require('./config'),
	mongoose = require('mongoose');

// Definir el método de configuración de Mongoose
module.exports = function() {
	
	mongoose.Promise = global.Promise;
	var db = mongoose.connect(config.db);

    // Cargar el modelo 'Article'
	require('../app/models/huellaConection');

	// Devolver la instancia de conexión a Mongoose
	return db;
};