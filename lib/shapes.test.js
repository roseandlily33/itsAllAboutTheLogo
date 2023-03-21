const {Triangle, Circle, Square} = require('./shapes');

describe('Tests for Triangle', () => {
    describe('Instance of triangle', () => {
        it('Should be an instance of the triangle class', () => {
            const myTriangle = new Triangle();
            expect(myTriangle).toBeInstanceOf(Triangle);
        })
    })
})






//Jest tests for shapes
//const shape = new Triangle();
//shape.setColor('blue');
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');