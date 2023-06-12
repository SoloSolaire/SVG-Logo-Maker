const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Type up to 3 characters for your SVG logo.',
            name: 'text'
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
    .then(() => {
        console.log('Generated logo.svg')
    })