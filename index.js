// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf-8",(error)=> error ? console.error(error): console.log("success!"))
}
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
        type: "input",
        message: "What is your project's title?",
        name: "title"
        },
        {
        type: "input",
        message: "Please give some introductions.",
        name: "intro"
        },
        {
        type: "input",
        message: "You can add user story here.",
        name: "userStory"
        },
        {
        type: "input",
        message: "Can you explain how to use your application?",
        name: "application"
        },
        {
        type: "input",
        message: "What is your Github username?",
        name: "username"
        },
        {
        type: "input",
        message: "Leave the contact information to collect feedbacks.",
        name: "contact"
        },
        {
        type: "list",
        message: "What license do you want to use?",
        name: "license",
        choices: ["The Unlicense","The MIT License","Apache 2.0 License","IBM 1.0","ISC License"]
        }
    ])
    .then((response)=>{
        const {title, intro, userStory, application,username, contact, license} = response
        writeToFile("sampleREADME.md", generateMarkdown(title,intro,userStory,application,username,contact,license))
    })
}

// Function call to initialize app
init();
