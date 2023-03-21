//Export triangle, circle, and square:
class Shape{
    constructor(shape, color, text){
        this.color = color;
        this.text = text;
        this.shape = shape;
    }
}
class Triangle extends Shape{
    constructor(color, text){
        super('Triangle', color, text);
    }
    render(){
        return `
        <svg verion="1.1" width="300" height="200" xlmns="https://www.w3.org/2000/svg">
        <polygon points="160, 10 290, 200 10, 200"
       fill=${this.colorShape}/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.name}</text></svg>
      `
    }
}

class Square extends Shape{
    constructor(color, text){
        super('Square', color, text);
    }
    render(){
    return `
    <svg verion="1.1" width="300" height="200" xlmns="https://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="100" fill=${this.colorShape}/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.name}</text></svg>
  `
    }
}
class Circle extends Shape{
    constructor(color, text){
        super('Circle', color, text);
    }
    render(){
        return `
        <svg verion="1.1" width="300" height="200" xlmns="https://www.w3.org/2000/svg">
        <circle cx="25" cy="75" r="20" fill=${this.colorShape}/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.name}</text></svg>
      `
        }
}
//<text x="10" y="10" >Hello World!</text>
module.exports = {Triangle, Square, Circle};
