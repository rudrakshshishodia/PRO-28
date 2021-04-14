class Tree{
constructor(x,y){
    this.x = x;
    this.y = y;
    this.width=450;
    this.height=600;
    this.thickness=10;

 this.image=loadImage("Plucking mangoes/tree.png");
 this.bb=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic: true})
 this.lb=Bodies.rectangle(0,this.y-this.height/2,this.thickness,this.height,{isStatic: false})
 this.rb=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic: false})
 World.add(world, this.bb);
 World.add(world, this.lb);
 World.add(world, this.rb);
}
 display(){
     var pos=this.bb.position;
     push();
     translate(pos.x,pos.y);
     fill(255);
     imageMode(CENTER);
     image(this.image,0,-this.height/2,this.width,this.height);
     pop();
 }
}
