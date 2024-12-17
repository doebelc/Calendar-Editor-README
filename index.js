// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installations are required?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this project going to be used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT License', 'Apache Lisence 2.0', 'The Unlisence', 'Eclipse Public Lisence 2.0'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who were the contributors to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users test this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address for questions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    }
];

// TODO: Create a function to write README file
// function writeToFile('README.md', data) {



// TODO: Create a function to initialize app
async function init() {
    console.log('Welcome to the Calander Editor!');
    inquirer.prompt(questions).then(generateMarkdown);
}

// Function call to initialize app
init();
