const {Triangle, Circle, Square} = require('./shapes');

describe('shapes', () => {

    describe('Triangle', () => {
        it('Triangle render method should return correct SVG string', () => {
            const shapes = new Triangle('red');
            const expectedSvg = '<polygon points="150,20 65,190 235,190" fill="red" />';

            expect(shapes.render()).toEqual(expectedSvg);
        });
    });

    describe('Circle', () => {
        it('Circle render method should return correct SVG string', () => {
            const shapes = new Circle('blue');
            const expectedSvg = '<circle cx="150" cy="100" r="88" fill="blue" />';

            expect(shapes.render()).toEqual(expectedSvg);
        });
    });

    describe('Square', () => {
        it('Square render method should return correct SVG string', () => {
            const shapes = new Square('green');
            const expectedSvg = '<rect x="65" y="20" width="170" height="170" fill="green" />';

            expect(shapes.render()).toEqual(expectedSvg);
        });
    })
});