// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // here I call the different packages I use and the other js file, generateMarkdown.
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
	// Here are the questions that are presented when its prompted in the terminal.
	{
		type: 'input',
		name: 'title',
		message: 'What is the name of your project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please provide the description.',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Please provide installation steps.',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'Please provide instructions on the usage of your application.',
	},
	{
		type: 'list',
		name: 'license',
		choices: [
			'MIT',
			'GPL 3.0',
			'Mozilla',
			'Unlicense',
			'Boost Software',
			'Apache',
		],
		message: 'Choose a license.',
	},
	{
		type: 'input',
		name: 'contributing',
		message: 'Please provide contributors.',
	},
	{
		type: 'input',
		name: 'test',
		message: 'Please provide the testing instructions.',
	},
	{
		type: 'input',
		name: 'github',
		message: 'Please provide your github account name.',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Please provide your email.',
	},
];

function init() {
	inquirer.prompt(questions).then((data) => {
		// Generates markdown.
		const READMEContent = generateMarkdown(data);
		fs.writeFile('newREADME.md', READMEContent, (err) =>
			err ? console.log(err) : console.log('README created!')
		);
	});
}

// Function to intialize application.
init();
