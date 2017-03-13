`use strict`

const readline = require('readline');
const async = require('async');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var calculator = {};

var ops = {
    '+': function(a, b) { return calculator.numberOne + calculator.numberTwo },
    '-': function(a, b) { return calculator.numberOne - calculator.numberTwo },
    '*': function(a, b) { return calculator.numberOne * calculator.numberTwo },
    '/': function(a, b) { return calculator.numberOne / calculator.numberTwo },
};

console.log(`Welcome to my simple Node.js calculator, simply add numbers when requested and submit an operator \n`)

async.series([
    function(callback) {
      rl.question('Number One : ', (answer) => {
        calculator.numberOne = answer;
        callback()
      });
    },
    function(callback) {
      rl.question('Number Two : ', (answer) => {
        calculator.numberTwo = answer;
        callback()
      });
    },
    function(callback) {
      rl.question('Operator : ', (answer) => {
        calculator.operator = answer;
        rl.close()
        callback()
      });
    },
    function(callback) {
      var output = console.log(`\n${calculator.numberOne} ${calculator.operator} ${calculator.numberTwo} equals :`, ops[calculator.operator](calculator.numberOne, calculator.numberTwo));
      callback()
    }
]);
