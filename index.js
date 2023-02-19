const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Using inquirer.prompt, create an array aof questions to ask the user
// for multiple choice questions like License use a list 

const init = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter the installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and examples for use.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project',
      choices: [
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License",
        "BSD 2-Clause License",
        "Eclipse Public License 1.0",
        "The MIT License",
        "Mozilla Public License 2.0",
        "GNU General Public License v3"
      ]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter guidelines for how others can contribute to the project.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide your tests and examples on how to run them.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your preferred e-mail address.',
    },
  ]);

// array of questions for user
const questions = [

    // * The title of my project 
    // * Description 
    // * Table of Contents 
    // * Installation 
    // * Usage 
    // * License 
    // * Contributing 
    // * Tests 
    // * Questions

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
// function init() {

}

// function call to initialize program
init();
