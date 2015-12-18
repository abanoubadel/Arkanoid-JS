

var Swing = function(x, y) {
    //calling constructors
    this.velocityX = 0;
    this.velocityY = 0;
    var length = 100;
    var width = 30;
    Shape.call(this, x, y, length, width, "swing", "swing");
};

Swing.prototype = Object.create(MovingShape.prototype);
Swing.prototype.constructor = Swing;


Swing.prototype.move = function(x) {
    MovingShape.prototype.move.call(this, x, 0);
};

Swing.prototype.checkCollision = function(obj) {
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
}



