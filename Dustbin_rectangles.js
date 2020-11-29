class Rectangle{
    constructor(x,y,width,height){ 

        this.body = Bodies.rectangle(x,y,width,height);
        this.body={
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.x=x
        this.y=y
        World.add(world, this.body);
    }
    display(){
               
        rectMode(CENTER);
        fill("white");
        rect(this.x, this.y, this.width, this.height);
        
    }
}