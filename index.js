const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        message: 'Name for your logo: (max 3 characters)',
        name: 'name',
        validate: function (input) {
            if (input >= 4) {
                console.log('Input must be less than 4 characters')
            } else {
                return true;
            }
        }
    }, {
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
    },
])
    .then((data) => {
        let shape;
        switch (data) {
            case 'Triangle': shape = new Triangle(data.colorText, data.colorShape, data.name); break;
            case 'Square': shape = new Square(data.colorText, data.colorShape, data.name); break;
            case 'Circle': shape = new Circle(data.colorText, data.colorShape, data.name); break;
            default: return 'Not a valid shape!'; break;
        }})
    .then((shape)=> {
        fs.writeFile(`./examples/${shape.name}.svg`, shape, err => {
           err ? console.log('File was not written') : console.log('File was written')
        })
    })
    .catch(err => console.log(err));

//Things to do:
//A logo.svg file needs to be created
//Output text to the terminal: 'Generated logo.svg"
//300x200px image with the selected criteria