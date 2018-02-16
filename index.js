var chalk = require("chalk");

var message = "Hello " + chalk.yellow.underline.bold.bgGreen("World");
console.log(message);