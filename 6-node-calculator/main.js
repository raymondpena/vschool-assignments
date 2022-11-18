var readlineSync = require('readline-sync');

function add(num1, num2){
    return Number (num1) + Number (num2)
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}
var firstNumber = readlineSync.question("Please enter your first number ")
var secondNumber = readlineSync.question("Please enter your second number ")
var operation = readlineSync.question("Please enter the operation to perform: 'add', 'sub', 'mul', or 'div'- ")

if(operation == "add"){
    console.log("The result is:" + "[" + add(firstNumber, secondNumber) + "]")
} else if(operation == "sub"){
    console.log("The result is:" + "[" + subtract(firstNumber, secondNumber) + "]")
}else if(operation == "mul"){
    console.log("The result is:" + "[" + multiply(firstNumber, secondNumber) + "]")    
}else if(operation == "div"){
    console.log("The result is:" + "[" + divide(firstNumber, secondNumber) + "]")    
} else {
    console.log("This is not a valid operation. Please enter 'add', 'sub', 'mul', or 'div'.")
}












// var name = readlineSync.question("what is you name? ")
// console.log(name + " was his name.")