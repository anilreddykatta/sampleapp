var express = require('express');
var index = require('./index');
var techSupportRoutes = require('./techsupportroutes');
var users = require('./users');

var route = function(app) {
    app.use('/', index);
    app.use('/support', techSupportRoutes);
    app.use('/users', users);
};

module.exports.route = route;