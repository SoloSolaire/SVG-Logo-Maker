// imported required files
const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./util/generateLogo')

// prompt questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Type up to 3 characters for your SVG logo.',
            name: 'text',
            validate: function (input) {
                if (input.length > 3) {
                    return "You've entered more than 3 characters. Please try again."
                }  else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What color would you like the TEXT of your logo to be?',
            name: 'colorText'
        },
        {
            type: 'list',
            message: 'Would you like your logo to be a circle, triangle, or a square?',
            choices: [
                'circle',
                'triangle',
                'square'
            ],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'What color would you like the SHAPE of your logo to be?',
            name: 'colorShape'
        },
    ])
// asynched to get user input first, then create file and print console.log message
    .then((data) => {
        const svgContent = generateLogo(data);

        fs.writeFile('logo.svg', svgContent, (err) => 
        err ? console.log(err) : console.log('Generated logo.svg')
        )        
    })