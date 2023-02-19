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

  return `#  ${data.title}  ${data.badge}

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
  
  ${data.license}
  
  
  ## Contributing
  
  ${data.contributing}
  
  
  ## Tests
  
  ${data.tests}
  

  ## Questions

  Please have a look at my [GitHub Profile](https://github.com/${data.github}/)

  If you have any questions please feel free to drop me an [e-mail](https://github.com/${data.email}/)


  ---`;
}

module.exports = generateMarkdown;
