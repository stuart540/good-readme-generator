
//function for user selected license to generate badge
function getBadge(license) {
  switch (license) {
    case "Apache 2.0 License":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
      case "Boost Software License 1.0":
      badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
      case "BSD 3-Clause License":
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
      case "BSD 2-Clause License":
      badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
      break;
      case "Eclipse Public License 1.0":
      badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      break;
      case "The MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
      case "Mozilla Public License 2.0":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
      case "GNU General Public License v3":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
  }
  return badge
}


// function to generate markdown for README
function generateMarkdown(data) {

  return `#  ${data.title} ` + getBadge(`${data.license}`) + `

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
