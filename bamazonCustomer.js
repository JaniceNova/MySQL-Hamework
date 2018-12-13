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

connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  // start();
});

const cTable = require('console.table');


connection.query("SELECT * FROM products", function (err, results) {
  if (err) throw err;
  console.table(results)
  var options = [];
  for (i = 0; i < results.length; i++) {
    options.push(results[i].product_name)

  };




  inquirer
    .prompt([{

      type: 'list',
      name: 'item',
      message: 'What would you like to buy?',
      choices: options

    }, {
      type: 'input',
      message: 'How many do you want to buy?',
      name: 'number'
    }])
    .then(function (answer) {
     // console.log(answer.item)
      connection.query("SELECT * FROM products WHERE product_name=?", [answer.item], function (err, res) {
        if (err) throw err;
       // console.log(res)
        if (parseInt(answer.number) <= res[0].stock_quantity) {
          console.log("Here is your " + answer.item + "! Thank you!");
           newquantity = res[0].stock_quantity - answer.number
           console.log("There are " + newquantity +" "+ answer.item + " items left.");
           price = answer.number * res[0].price
           console.log("Your total is $" + price);
        }
        else {
          
          console.log("Insufficent stock quantity!  Please pick another item.");
        }
      })
    })
})