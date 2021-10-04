// 5 
var express = require('express');
var con=require('./../db')
var router = express.Router();
var sql= "select customer.customer_name, purchase.order_product from customer join purchase on customer.customer_id = purchase.customer_id";
con.query(sql, function(err,result){
  if (err) throw err;
  console.log(result);
  });

  



  module.exports = router;

 
 
  
 