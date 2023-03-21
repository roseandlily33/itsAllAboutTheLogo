const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'Name for your logo: (max 3 characters)',
        name: 'name',
        validate: function (input) {
            if (input.length >= 4) {
                console.log('Input must be less than 4 characters');
                return false;
            } else {
                return true;
            }
        }
    }, 
    {
        type: 'input',
        message: 'Enter a color keyword or hex value for the words',
        name: 'colorText',
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        message: 'Enter a color keyword or hex value for the shape',
        name: 'colorShape',
    }
])
    .then((data) => {
        let myShape;
        switch (data.shape) {
            case 'Triangle':
            return myShape = new Triangle(data.shape, data.colorShape, data.colorText, data.name).render(); break;
            case 'Square':
            return myShape = new Square(data.shape, data.colorShape, data.colorText, data.name).render(); break;
            case 'Circle':
            return myShape = new Circle(data.shape, data.colorShape, data.colorText, data.name).render(); break;

            default: 'Not a valid shape!'; break;
        }
    })
    .then((shape) => {
        fs.writeFile(`./examples/logo.svg`, shape, err => {
            err ? console.log('File was not written') : console.log('File was written');
        })
    })
    .catch(err => console.log('CATCH ERROR' + err));
