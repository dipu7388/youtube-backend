'use strict';
var express = require('express');
module.exports = function(app) {
var apiRoutes= require('./apiRouter');
var apiRouter =  express.Router();

app.get('/',function(req,res){

    res.send('We are happy to see you using youtube Webhook');
  });
  app.use('/api',apiRoutes(app))
}