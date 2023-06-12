class Shape {
    constructor(color) {
      this.color = color;
    }
    render() {
      return '';
    }
  }  

  class Triangle extends Shape {
    render() {
      return `<polygon points="150,20 65,190 235,190" fill="${this.color}" />`;
    }
  }  

  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="88" fill="${this.color}" />`;
    }
  }  

  class Square extends Shape {
    render() {
      return `<rect x="65" y="20" width="170" height="170" fill="${this.color}" />`;
    }
  }  

  module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
  };  