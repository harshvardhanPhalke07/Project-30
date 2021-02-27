class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
   display(){
   this.v=255
   if(this.body.speed >3){
     this.v= this.v-5
   }
   
    tint (255,this.v)
   }
  
  };
  