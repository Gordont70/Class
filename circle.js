class Circle{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            
        }
        this.r= r
        this.body=Bodies.circle(x,y,this.r,options)
        this.image= loadImage("Card.png")
        World.add(world, this.body)
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        translate(pos.x,pos.y)
        fill ("orange")
        ellipseMode(RADIUS)
        image(this.image,0,0,this.r,this.r)
        
    }
}