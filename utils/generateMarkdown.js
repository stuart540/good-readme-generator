//create a README.md template with spaces fro the user input to be added.
// The contents section needs to be selectable using * [Installation](#installation)

//  * Description 
// * Table of Contents 
// * Installation 
// * Usage 
// * License 
// * Contributing 
// * Tests 
// * Questions


// function to generate markdown for README
function generateMarkdown(data) {

  `#  ${answers.title}  ${answers.badge}

  ## Description
  
  ${answers.description}
  

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  
  ${answers.installation}
  
  
  ## Usage 
  
  ${answers.usage}
  

  ## License
  
  ${answers.license}
  
  
  ## Contributing
  
  ${answers.contributing}
  
  
  ## Tests
  
  ${answers.tests}
  

  ## Questions

  Please have a look at my [GitHub Profile](https://github.com/${answers.github}/)

  If you have any questions please feel free to drop me an [e-mail](https://github.com/${answers.email}/)


  ---`

  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
