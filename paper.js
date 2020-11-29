class Paper{
    constructor(x,y){ 

        var options={
    isStatic: true
	,restitution: 0.3
	,friction: 0.5
	,density: 1.2}

        this.x=x
        this.y=y
        this.body = Bodies.circle(x,y,20, options);
        World.add(world, this.body);
    }
    display(){
               
        rectMode(CENTER);
        fill("pink");
        circle(this.x, this.y,20);
        
    }
}