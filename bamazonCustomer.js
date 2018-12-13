// Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon_DB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
   // start();
  });

const cTable = require('console.table');


    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
     console.table(results)
     var options = [];
     for (i=0; i<results.length; i++) {
      options.push(results[i].product_name)

     };
 



 inquirer
     .prompt([{
 
      type: 'list',
      name: 'size',
      message: 'What would you like to buy?',
      choices:   options

    }])
    .then(function(answer) {
           
              })





    })
    
