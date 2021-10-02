var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test@123",
  database:"project1"
});

// 5 
var sql= "select customer.customer_name, purchase.order_product from customer join purchase on customer.customer_id = purchase.customer_id";
con.query(sql, function(err,result){
  if (err) throw err;
  console.log(result);
  });
// 6 
  var sql= "select order_date,count(order_product) from purchase group by order_date";
  con.query(sql, function(err,result){
    if (err) throw err;
    console.log(result);
    });

// 7
 var sql= "select customer_id,count(order_product) from purchase group by order_date";
        con.query(sql, function(err,result){
        if (err) throw err;
        console.log(result);
        });


                    

     
  
module.exports = con;
