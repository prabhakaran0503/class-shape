class Shape{
   area(){

   }
}
class Circle extends Shape{
    constructor(radius){
        super()
        this.radius=radius
        
    }
    area(){
        let a=(3.14*this.radius*this.radius)
        console.log(a);
    }
}
class Triangle extends Shape{
    constructor(width,height){
        super()
        this.width=width
        this.height=height
    }
    area(){
        let b=1/2*(this.width*this.height)
        console.log(b);
    }
}
let circle=new Circle(20);
circle.area()
let triangle=new Triangle(10,20)
triangle.area();