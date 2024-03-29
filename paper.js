class Paper {
    constructor(x,y,r) {
        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2


        }

        this.body = Matter.Bodies.circle(x,y,r,options);
        World.add(world,this.body);

        this.image = loadImage("paper.png");

        this.r = r;


    }

    display() {
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        
        pop();

 }

}