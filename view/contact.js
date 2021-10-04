// 6 
var express = require('express');
var con=require('./../db')
var router = express.Router();

var sql= "select order_date,count(order_product) from purchase group by order_date";
con.query(sql, function(err,result){
  if (err) throw err;
  console.log(result);
  });
  module.exports = router;