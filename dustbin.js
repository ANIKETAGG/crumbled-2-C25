class Dustbin {
    constructor(x,y) {
     
        this.bottomBody = Matter.Bodies.rectangle(x,y,200,20 , {isStatic:true} );
        this.leftBody = Matter.Bodies.rectangle(x-100,y-40,20,100 , {isStatic:true} );
        this.rightBody = Matter.Bodies.rectangle(x+100,y-40,20,100 , {isStatic:true} );

        World.add( world, this.bottomBody);
        World.add( world, this.leftBody);
        World.add( world, this.rightBody);

        this.x = x;
        this.y = y;

        this.image = loadImage("dustbingreen.png")
    }

        

    display() {
        
        rectMode(CENTER);
        push();
        imageMode(CENTER);
        image(this.image,this.x,this.y-90,200,200);
        pop();

    }
}

