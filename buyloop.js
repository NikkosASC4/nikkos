// Spend 1000
// balance = 1000
// Create variable called balance

var prompt = require('prompt-sync')();

var balance = 1000;

while (balance > 0){
    spent = prompt("How much do you want to spend? ");

    while (spent>balance) {
        spent = prompt("That's too much money. Your balance is " + balance + "How much do you want to spend?");
    }

    balance = balance - spent;
    console.log("Your balance is " + balance);
    }