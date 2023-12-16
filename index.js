// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")
// console.log("for test")
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf-8",(error)=> error ? console.error(error): console.log("success!"))
}
// TODO: Create a function to initialize app
function init() {
    const [q1,q2,q3,q4,q5,q6] = questions
    inquirer
    .prompt([
        {
        type: "input",
        message: q1,
        name: "title"
        },
        {
        type: "input",
        message: q2,
        name: "intro"
        },
        {
        type: "input",
        message: q3,
        name: "userStory"
        },
        {
        type: "input",
        message: q4,
        name: "application"
        },
        {
        type: "input",
        message: q5,
        name: "contact"
        },
        {
        type: "list",
        message: q6,
        name: "license",
        choices: ["The Unlicense","The MIT License","Apache 2.0 License","IBM 1.0","ISC License"]
        }
    ])
    .then((response)=>{
        const {title, intro, userStory, application, contact, license} = response
        writeToFile("sampleREADME.md", generateMarkdown(title,intro,userStory,application,contact,license))
    })
}

// Function call to initialize app
init();
