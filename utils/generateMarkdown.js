// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	// Here is the function to render in the badges.
	if (license === 'Mozilla') {
		return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
	}
	if (license === 'MIT') {
		return 'https://img.shields.io/badge/License-MIT-yellow.svg';
	}
	if (license === 'Apache') {
		return 'https://img.shields.io/badge/License-Apache_2-blue.svg';
	}
	if (license === 'GPL 3.0') {
		return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
	}
	if (license === 'Unlicense') {
		return 'https://img.shields.io/badge/License-The_Unlicense-brightgreen.svg';
	}
	if (license === 'Boost Software') {
		return 'https://img.shields.io/badge/License-Boost_Software-yellow.svg';
	}
	if (!license) {
		return '';
	}
}

// TODO: Create a function that returns the license link  // here is the function to render in the links to the license.
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (license === 'Mozilla') {
		return 'https://www.mozilla.org/en-US/MPL/2.0/';
	}
	if (license === 'MIT') {
		return 'https://choosealicense.com/licenses/mit/';
	}
	if (license === 'Apache') {
		return 'https://www.apache.org/licenses/LICENSE-2.0';
	}
	if (license === 'GPL 3.0') {
		return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
	}
	if (license === 'Unlicense') {
		return 'https://unlicense.org/';
	}
	if (license === 'Boost Software') {
		return 'https://img.shields.io/badge/License-Boost_Software-yellohttps://www.boost.org/LICENSE_1_0.txtw.svg';
	}
	if (!license) {
		return '';
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	//this function renders the whole license and combines it into a clickable badge that takes you the the license link.
	return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(
		license
	)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	// this function generates the README.md file

	return `# ${data.title} 
  ${renderLicenseSection(data.license)}
  
  # Description
  ${data.description}
  # Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [Link](#License)
  [Contributing](#Contributing)
  [Test](#Test)
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  ${data.license}
  # Contributing
  ${data.contributing}
  # Test
  ${data.test}
  # My information
  If you have any questions, please feel free to reach out to me.
  My Github: ${data.github}
  My Email: <${data.email}>
`;
}

module.exports = generateMarkdown; // This exports my generatedMarkdown so i can use it in the index.js file.
