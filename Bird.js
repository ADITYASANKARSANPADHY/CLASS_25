class Bird extends BaseClass{
  constructor(x,y) {
  // super keyword will make the bird class to access the base class's property and method . 
    super (x,y,50,50);
    // overrides the properties of base class
    this.image = loadImage("sprites/bird.png");



}

display () {
  this.body.position.x = mouseX;
  this.body.position.y = mouseY;

  super.display();

}














} 

