class Ground {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true,
        'restitution':0,
        'friction':0,
        'density':1
      }
      this.body = Bodies.rectangle(600,590,2000,10,options);
      this.width = width;
      this.height = height;
        
      World.add(world, this.body);
      }
    display(){
      rectMode(CENTER);
  
      fill("green");
  
      rect(this.body.position.x, this.body.position.y, this.width, this. height);
      }
    }