const constraint = Matter.Constraint
class SlingShot {
constructor (bodyA,pointB)
{

var options ={
    bodyA: bird.body,
    pointB: pointB,
    stiffness: 0.04,
    length:10
}
 this.Sling = constraint.create(options)
World.add(world,this.Sling)
}
 
fly(){
    
    this.Sling.bodyA=null;
}
display(){
    if(this.Sling.bodyA){
push()
    strokeWeight (3)
var posA=this.Sling.bodyA.position;
var posB =this.pointB;
//line (this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.pointB.x,this.pointB.y);
pop ()
}
}
}