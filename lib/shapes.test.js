const {Triangle, Circle, Square} = require('./shapes');


//Test for Triangle:
describe('Tests for Triangle', () => {
    describe('Instance of triangle', () => {
        it('Should be an instance of the triangle class', () => {
            const myTriangle = new Triangle();
            expect(myTriangle).toBeInstanceOf(Triangle);
        })
    })
    describe('Initalize the color of the shape', () => {
        it('Should set the shape colour to green', () => {
        const color = 'green';
        const myTriangle = new Triangle('triangle', color);
        expect(myTriangle.colorShape).toBe(color); })
    });
    describe('Initialize the color of the words', () => {
        it('Should set the colour of the words to pink', () => {
        const colorWords = 'pink';
        const myTriangle = new Triangle('triangle', 'white', colorWords);
        expect(myTriangle.colorText).toBe(colorWords); })
    })
    describe('Initalize the name', () => {
        it('Should set the logo text to PIN', ()=> {
        const name = 'PIN';
        const myTriangle = new Triangle('triangle', 'white', 'blue', name);
        expect(myTriangle.name).toBe(name);})
    })
})

//Test for Circle:
describe('Tests for Circle', () => {
    describe('Instance of circle', () => {
        it('Should be an instance of the circle class', () => {
            const myCircle = new Circle();
            expect(myCircle).toBeInstanceOf(Circle);
        })
    })
    describe('Initalize the color of the shape', () => {
        it('Should set the shape colour to green', () => {
        const color = 'blue';
        const myCircle= new Circle('circle', color);
        expect(myCircle.colorShape).toBe(color); })
    });
    describe('Initialize the color of the words', () => {
        it('Should set the colour of the words to pink', () => {
        const colorWords = 'purple';
        const myCircle = new Circle('circle', 'white', colorWords);
        expect(myCircle.colorText).toBe(colorWords); })
    })
    describe('Initalize the name', () => {
        it('Should set the logo text to PIN', ()=> {
        const name = 'PIN';
        const myCircle= new Circle('circle', 'white', 'blue', name);
        expect(myCircle.name).toBe(name);})
    })
})


//Test for Square: 
describe('Tests for Square', () => {
    describe('Instance of square', () => {
        it('Should be an instance of the square class', () => {
            const mySquare = new Square();
            expect(mySquare).toBeInstanceOf(Square);
        })
    })
    describe('Initalize the color of the shape', () => {
        it('Should set the shape colour to green', () => {
        const color = 'brown';
        const mySquare = new Square('square', color);
        expect(mySquare.colorShape).toBe(color); })
    });
    describe('Initialize the color of the words', () => {
        it('Should set the colour of the words to pink', () => {
        const colorWords = 'yellow';
        const mySquare = new Square('square', 'white', colorWords);
        expect(mySquare.colorText).toBe(colorWords); })
    })
    describe('Initalize the name', () => {
        it('Should set the logo text to PIN', ()=> {
        const name = 'PIN';
        const mySquare = new Square('square', 'white', 'blue', name);
        expect(mySquare.name).toBe(name);})
    })
})






//Jest tests for shapes
//const shape = new Triangle();
//shape.setColor('blue');
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');