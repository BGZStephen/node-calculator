`use strict`

const readline = require('readline');

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

rl.question('Number One : ', (answer) => {
  calculator.numberOne = answer;
    rl.question('Number Two : ', (answer) => {
      calculator.numberTwo = answer;
      rl.question('Operator : ', (answer) => {
        calculator.operator = answer;
        rl.close()
        var output = console.log(`\n${calculator.numberOne} ${calculator.operator} ${calculator.numberTwo} equals :`, ops[calculator.operator](calculator.numberOne, calculator.numberTwo));
    });
  });
});

// var calculate = function(numberOne, numberTwo, operator) {
//   console.log(`calculating.....`)
//   var output = Mathnumber1 operator numbertwo;
//   console.log(`Calculation complete: ${numberOne} ${operator} ${numberTwo} equals ${output}`)
// }
