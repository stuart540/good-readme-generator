const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Using inquirer.prompt, create an array aof questions to ask the user
// for multiple choice questions like License use a list 

const init = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
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
