// List a set of menu options:
// View Products for Sale
// View Low Inventory
// Add to Inventory
// Add New Product

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










        })
})