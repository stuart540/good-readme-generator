const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
function init() {

}

// function call to initialize program
init();

const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);