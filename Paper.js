class Paper {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.3,
          density:1.2,
          friction:0.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("Brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };