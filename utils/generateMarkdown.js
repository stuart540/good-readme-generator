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

  // list of license badges
  "Apache 2.0 License",
  "Boost Software License 1.0",
  "BSD 3-Clause License",
  "BSD 2-Clause License",
  "Eclipse Public License 1.0",
  "The MIT License",
  "Mozilla Public License 2.0",
  "GNU General Public License v3"

  const badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

  return `#  ${data.title}  ${badge}

  ## Description
  
  ${data.description}
  

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage}
  

  ## License
  
  This project is licensed under the ${data.license}
  
  
  ## Contributing
  
  ${data.contributing}
  
  
  ## Tests
  
  ${data.tests}
  

  ## Questions

  Please have a look at my [GitHub Profile](https://github.com/${data.github}/)

  If you have any questions please feel free to drop me an e-mail <${data.email}>


  ---`;
}

module.exports = generateMarkdown;
