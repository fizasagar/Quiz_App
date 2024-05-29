#!usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my advanture quiz game:");
console.log("you are required to gain maximum 9 points for the window.");
let points = 0;
// Question 01
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset of?",
        type: "list",
        choices: ["python", "c++", "javascript"]
    }
]);
if (question1.one == "javascript") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Question 02
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "Who developed and designed Typescript?",
        type: "list",
        choices: ["Oracle", "Microsoft", "Amazon"]
    }
]);
if (question2.two == "Microsoft") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Question 03
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "Output of the following code when you apply str.toUpperCase() method? let str: string = 'Hello'; ",
        type: "list",
        choices: ["Hello", "HELLO", "hello"]
    }
]);
if (question3.three == "HELLO") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Question 04
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "Which of the following string properties will return the length of the string in Typescript?",
        type: "list",
        choices: ["stringName.length", "stringName.count", "None of the above"]
    }
]);
if (question4.four == "stringName.length") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Question 05
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "Which of the following is the typing principle of Typescript?",
        type: "list",
        choices: ["Gradual", "Duck", "Dynamic", "All of the above"]
    }
]);
if (question5.five == "All of the above") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Question 06
let question6 = await inquirer.prompt([
    {
        name: "six",
        message: "Which of the following is a filename extension for typescript?",
        type: "list",
        choices: [".txt", ".tsx", ".nod"]
    }
]);
if (question6.six == ".tsx") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Question 07
let question7 = await inquirer.prompt([
    {
        name: "seven",
        message: "The following are backported features of typescript except?",
        type: "list",
        choices: ["Modules", "Classes", "Methods"]
    }
]);
if (question7.seven == "Methods") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Question 08
let question8 = await inquirer.prompt([
    {
        name: "eight",
        message: "In Typescript, String is nothing but___________",
        type: "list",
        choices: ["Sequence of characters", "Sequence of numbers", "None of the above"]
    }
]);
if (question8.eight == "Sequence of characters") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Question 09
let question9 = await inquirer.prompt([
    {
        name: "nine",
        message: "Which string method replaces the matched substring with a new substring",
        type: "list",
        choices: ["replace()", "split", "charAt()"]
    }
]);
if (question9.nine == "replace()") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Question 10
let question10 = await inquirer.prompt([
    {
        name: "ten",
        message: "Which of the following string method is used to remove the white spaces from the string",
        type: "list",
        choices: ["split()", "trim()", "replace()"]
    }
]);
if (question10.ten == "trim()") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("Incorrect answer");
}
// Output conditions
if (points >= 9) {
    console.log(`Congratulations! You Won`);
    console.log(`your points:${points}`);
}
else {
    console.log(`you loose! try again letter`);
    console.log(`your points:${points}`);
}
