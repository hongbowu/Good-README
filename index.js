// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown")
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [
    //ask user to put project title
    "What is your project's title?",
    //ask user to put introduction
    "Please give some introductions.",
    //ask user to put user story
    "You can add user story here.",
    //ask user to put how to use it
    "Can you explain how to use your application?",
    //ask user the way to contact information
    "Leave the contact information to collect feedbacks.",
    //ask user what license will use or no license
    "What license do you want to use?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
