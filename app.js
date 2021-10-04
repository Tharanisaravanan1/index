const express = require('express');
var home = require('./view/home');
var about = require('./view/about');
var contact = require('./view/contact');
var customer = require('./view/customer');
 

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
 app.use('/', home);
 app.use('/about', about);
 app.use('/contact', contact);
 app.use('/customer', customer);
 

app.listen(3000, function(){
  console.log("Express server listening on port ",3000);
});
module.exports = app;
