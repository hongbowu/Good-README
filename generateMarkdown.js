// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "The MIT License" :
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break;
    case "Apache 2.0 License" :
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    break;
    case "IBM 1.0" :
      return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
      break;
    case "ISC License" :
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"
      break;
    case "The Unlicense":
      return
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "The MIT License" :
      return "https://opensource.org/licenses/MIT"
      break;
    case "Apache 2.0 License" :
      return "https://opensource.org/licenses/Apache-2.0"
    break;
    case "IBM 1.0" :
      return "https://opensource.org/licenses/IPL-1.0"
      break;
    case "ISC License" :
      return "https://opensource.org/licenses/ISC"
      break;
    case "The Unlicense":
      return
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "The MIT License" :
      return `This project is licensed under ${license} see(${renderLicenseLink(license)})for details.`
      break;
    case "Apache 2.0 License" :
      return  `This project is licensed under ${license} see(${renderLicenseLink(license)})for details.`
    break;
    case "IBM 1.0" :
      return  `This project is licensed under ${license} see(${renderLicenseLink(license)})for details.`
      break;
    case "ISC License" :
      return  `This project is licensed under ${license} see(${renderLicenseLink(license)})for details.`
      break;
    case "The Unlicense":
      return
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(title,intro,userStory,application,username,contact,license){
  let readme = `
  # ${title}

  ## CONTENT
  - [Introduction](#introduction)
  
  - [User Story](#user-story)
  
  - [How to Use](#how-to-use)
  
  - [Github Contact](#github-contact)
  
  - [Contact Me](#contact-me)
  
  - [License](#license)

  
  ## Introduction
  ${intro}
  
  ## User Story
  ${userStory}
  
  ## How to Use
  ${application}

  ## Github Contact
  This is my Github link
  github.com/${username}
  
  ## Contact Me
  If you have any questions or you have some suggestions you can contact me with:
  ${contact}
  
  ## License
  ${renderLicenseBadge(license)}
 
  ${renderLicenseSection(license)}
  
  `
  return readme;
  }

module.exports = generateMarkdown;
