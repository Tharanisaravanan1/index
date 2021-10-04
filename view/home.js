var express = require('express');
var con=require('./../db')
var router = express.Router();
const util = require('util');


  const query = util.promisify(con.query).bind(con);
  router.post('/one',(req,res)=>   {
    data(req.body)
    res.send("data inserted successfully in customer table")
  })
  
  let data=async(data) => {
    var sql = "Insert into customer (customer_id,customer_name,customer_city) values ('"+data.customer_id+"','"+data.customer_name+"','"+data.customer_city+"')";
    con.query(sql, function(err,result){
    if (err) throw err;
    console.log("data inserted successfully");
    });
    }

    router.post('/two',(req,res)=>   {
      data1(req.body)
      res.send("data inserted successfully in purchase table")
    })
    let data1=async(data) => {
      var sql = "Insert into customer (customer_id,customer_name,customer_city) values ('"+data.customer_id+"','"+data.customer_name+"','"+data.customer_city+"')";
      con.query(sql, function(err,result){
      if (err) throw err;
      console.log("data inserted successfully");
      });
      }
    
    router.post('/three',(req,res)=>   {
      data2(req.body)
      res.send("data inserted successfully in purchase table")
    })
    
    let data2=async(data) => {
      var sql = "Insert into purchase (customer_id,order_product,order_date) values ('"+data.customer_id+"','"+data.order_product+"','"+data.order_date+"')";
      con.query(sql, function(err,result){
      if (err) throw err;
      console.log("data inserted successfully");
      });
      }   

      router.put('/four',(req,res)=>   {
        data3(req.body)
        res.send("data inserted successfully in purchase table")
      })
      
      let data3=async(data) => {
        var sql = "Insert into purchase (customer_id,order_product,order_date) values ('"+data.customer_id+"','"+data.order_product+"','"+data.order_date+"')";
        con.query(sql, function(err,result){
        if (err) throw err;
        console.log("data inserted successfully");
        });
        }   

        router.delete('/del',(req,res)=>   {
          data4
          res.send("data deleted successfully in purchase table")
      })
      
      
      let data4=async(data) => {
          var sql = "delete  from purchase  where customer_id=1" ;
          con.query(sql, function(err,result){
          if (err) throw err;
          console.log("data deleted successfully");
          });
          }

          module.exports = router;

