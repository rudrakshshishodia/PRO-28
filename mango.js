class Mango{
    
        constructor(x, y, r) {
          var options = {
            'isStatic': true,  
              'friction':1.0,
              'density':3.0
          }
          this.x = x;
          this.y = y;
          this.r = r;
          
          this.image=loadImage("Plucking mangoes/mango.png");

          this.body = Bodies.circle(this.x, this.y, this.r, options);
          
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          ellipseMode(CENTER);
          //this is for filling the shape
          fill("orange");
          //this is for border
          
         image(this.image, 0,0, this.r,this.r);
          pop();
        }
      };
