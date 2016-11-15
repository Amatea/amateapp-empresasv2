
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var	passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3001);

console.log('Servidor ejecutándose en http://localhost:3001/');

module.exports = app;


