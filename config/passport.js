// Invocar modo JavaScript 'strict'
'use strict';

// Cargar las dependencias de módulos
var passport = require('passport'),
    mongoose = require('mongoose');

//Definir el método de configuración de Passport
module.exports = function() {
  //Cargar el modelo 'User'
  var User = mongoose.model('User');
  
  //Usar el método 'serializeUser' para serializar la id del usuario
  passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

  //Cargar los archivos de configuración de estrategias de Passport
  require('./strategies/local.js')();
  require('./strategies/google.js')();
  require('./strategies/facebook.js')();
};