

class Circle{
    constructor(radius = 1.0,color = "red"){
        this.radius = radius
        this.color = color
    }
    getRadius(){
        return this.radius;
    }
    setRadius(){
        return this.radius = 0
    }
    getColor(){
        return this.color;
    }
    setColor(){
        return this.color = 0
    }
    toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`
    }
    getArea(){
        return 3.14 * (this.radius) * (this.radius)
    }
    getCircumference(){
        return 2 * 3.14 * (this.radius)
    }
    }
    let circle1 = new Circle()
    console.log(circle1.getRadius())
    console.log(circle1.getColor())
    console.log(circle1.toString())
    console.log(circle1.getArea())
    console.log(circle1.getCircumference())
    console.log(circle1.setRadius())
    console.log(circle1.setColor())