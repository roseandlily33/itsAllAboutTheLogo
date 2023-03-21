//Export triangle, circle, and square:
class Shape{
    constructor(shape, colorShape, colorText, name){
        this.shape = shape;
        this.colorShape = colorShape;
        this.colorText = colorText;
        this.name = name;
    }
}
class Triangle extends Shape{
    constructor(shape, colorShape, colorText, name){
        super(shape, colorShape, colorText, name);
    }
    render(){
        return `
        <svg verion="1.1" width="300" height="200" xlmns="https://www.w3.org/2000/svg">
        <polygon points="160, 10 290, 200 10, 200"
       fill="${this.colorShape}"/>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.name}</text></svg>
      `
    }
}

class Square extends Shape{
    constructor(shape, colorShape, colorText, name){
        super(shape, colorShape, colorText, name);
    }
    render(){
    return `
    <svg verion="1.1" width="300" height="200" xlmns="https://www.w3.org/2000/svg">
    <rect x="75" y="25" width="150" height="150" fill="${this.colorShape}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.name}</text></svg>
  `
    }
}
class Circle extends Shape{
    constructor(shape, colorShape, colorText, name){
        super(shape, colorShape, colorText, name);
    }
    render(){
        return `
        <svg verion="1.1" width="300" height="200" xlmns="https://www.w3.org/2000/svg">
        <circle cx="150" cy="105" r="80" fill="${this.colorShape}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.name}</text></svg>
      `
        }
}
//<text x="10" y="10" >Hello World!</text>
module.exports = {Triangle, Square, Circle};
