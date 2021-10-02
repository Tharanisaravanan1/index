const express = require('express');
var home = require('./view/home');
 

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
 app.use('/', home);
 

app.listen(3000, function(){
  console.log("Express server listening on port ",3000);
});
module.exports = app;
