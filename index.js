// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Can you describe your project?",
        name: "description"
    },
    {
        type: "input",
        message: "How can users install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How can we use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "How can we test your project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What are your contributions?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Name of developer(s)?:",
        name: "name"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "githubUsername"
    },
    {
        type: "list",
        message: "Please select your license",
        choices: ["Unlicense", "MIT", "Apache", "None"],
        name: "license"
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
      fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!\nREADME.md generated successfully.'))
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
    writeToFile("Generated-README.md", answers);
    });
}

// Function call to initialize app
init();
