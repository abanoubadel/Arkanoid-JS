var Swing = function(x, y) {
    //calling constructors
    this.isStopped = false;
    this.accX = 1;
    this.accY = 1;
    this.sound = "sound/swing.mp3"
    this.velocityX = 0;
    this.velocityY = 0;
    var length = 104;
    var width = 24;
    Shape.call(this, x, y, length, width, "swing", "swing");
};

Swing.prototype = Object.create(MovingShape.prototype);
Swing.prototype.constructor = Swing;


Swing.prototype.move = function(x) {
    MovingShape.prototype.move.call(this, x, 0);
};
//for making scheduler
/*Swing.prototype.checkCollision = function(obj) {
	var result = Shape.prototype.checkCollision.call(this,obj);
	var oCX = obj.getCenter()[0];
	var oVx = obj.getVelocityDir()[0];
	var oVy = obj.getVelocityDir()[1];


	var leftExtreme = this.getCenter()[0]-this.getWidth()/4;
	var rightExtreme = this.getCenter()[0]+this.getWidth()/4;

	if( this.isHitted(result) && ((oCX-obj.getWidth()/2 < leftExtreme && oVx>0) || (oCX+obj.getWidth()/2 > rightExtreme && oVx<0 )) )
	{
		result =[1,1];
	}
	return result; 
}*/
Swing.prototype.checkCollision = function(obj) {
	
	var leftExtreme = this.getX();
	var rightExtreme = leftExtreme+this.getWidth();
	
	/*var startAngle = 155;
	var endAngle = 25;*/
	var result = Shape.prototype.checkCollision.call(this,obj);

	var angleScale = 100;//angle movement on a swing max less than 180
	var startAngle;
	if(obj.getY()>this.getCenter()[1])//down the stream
	{
		angleScale *= -1;
		startAngle = 270 +(angleScale/2) 
	}
	else
	{
		startAngle = 180-(angleScale/2);
	}

	var objCenter  = obj.getCenter()[0];
	if( this.isHitted(result) ){
		var placeRatio = ((objCenter-this.getX())/this.getWidth());
		var angle = startAngle - placeRatio*(angleScale);
		obj.setVelocityAngle(angle);
	}
	return [0,0]; //collision not handelled by physics

}



