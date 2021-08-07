class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            friction: 0.5

        }
        this.body= Bodies.rectangle(x,y,width,height,options)
        this.width= width
        this.height= height
        World.add(world,this.body)
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        translate(pos.x,pos.y)
        stroke("blue")
        strokeWeight(3)
        fill ("black")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
    }
}