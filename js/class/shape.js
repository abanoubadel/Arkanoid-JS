var Shape = function (x,y,width,height,id,addedClass) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.id = id;
	this.initialClass = "position";
	this.addedClass = addedClass;
	this.generateHtml();
	

};


Shape.prototype.getIntoContainer =function(container)
{
	this.div = container.appendChild(this.div);
};

Shape.prototype.getCenter = function(){
	return [this.x+this.width/2,this.y+this.height/2];
};

Shape.prototype.getWidth = function(){
	return this.width;
};

Shape.prototype.getHeight = function(){
	return this.height;
};



Shape.prototype.getElement = function(){
	return this.div;
};

Shape.prototype.setPlace = function () {
		// body...
		if(this.div)
		{
			this.div.style.left = this.x + "px";
			this.div.style.bottom = this.y + "px";
		}
};
Shape.prototype.addClass = function (cls) {
		
		this.div.classList.add(cls);
		
};


Shape.prototype.setColor = function(color)
{
	this.div.style.backgroundColor = color;

};

Shape.prototype.generateHtml = function() {
		this.div = document.createElement("div");
		this.div.classList.add(this.initialClass);
		this.addClass(this.initialClass);
		this.addClass(this.addedClass);
		this.div.id= this.id;
		this.div.style.width = this.width+"px";
		this.div.style.height = this.height+"px";
		this.setPlace();
};

Shape.prototype.getX = function()
{
	return this.x;
};

Shape.prototype.getY = function()
{
	return this.y;
};

Shape.prototype.getWidth = function()
{
	return this.width;
};

Shape.prototype.getHeight = function()
{
	return this.height;
};

Shape.prototype.getDims = function()
{
	return [this.width,this.height];
};

Shape.prototype.getDimSize = function()
{
	return 2;
};






var MovingShape = function(x,y,width,height,id,addedClass){
	Shape.call(this,x,y,width,height,id,addedClass);
	this.velocityX = 0;
	this.velocityY = 0;

}




MovingShape.prototype = Object.create(Shape.prototype);
MovingShape.prototype.constructor = MovingShape;

MovingShape.prototype.move = function(x,y)
{
	this.x+= x;
	this.y += y;
	this.setPlace();	
}

MovingShape.prototype.revertVelocityX = function(){
	this.velocityX *= -1; 
}
MovingShape.prototype.revertVelocityY = function(){
	this.velocityY *= -1; 
}


MovingShape.prototype.revertVelocity = function(carr){
	if(carr[0] > 0)
	{
		this.revertVelocityX();
	}
	if (carr[1]>0) 
	{
		this.revertVelocityY();

	}; 
}


MovingShape.prototype.inertia = function(){
	this.move(this.velocityX,this.velocityY);
	//MovingShape.prototype.move.call(this,this.velocityX,this.velocityY);	
}

MovingShape.prototype.setX = function (x) {
	this.move(x-this.getX(),0);
}

MovingShape.prototype.checkCollisionDims = function(obj){
	var center1 = this.getCenter();
	var center2 = obj.getCenter();
	var dim1 = this.getDims();
	var dim2 = obj.getDims();
	var collisionDim = [];
	for (var i = 0; i < this.getDimSize(); i++) {
		collisionDim.push( -1*Math.abs(center1[i]-center2[i]) + (dim1[i]+dim2[i])/2 );
	};
	var CollisionHappened = true;

	for (var i = 0; i < collisionDim.length; i++) {
		if(collisionDim[i]<0)
		{
			CollisionHappened = false;
		}
	};
	if(!CollisionHappened)
	{
		for (var i = 0; i < collisionDim.length; i++) {
			collisionDim[i]=0;
		};
	}

	return collisionDim;


}


MovingShape.prototype.checkCollision = function(obj)
{
	var center2 = obj.getCenter();
	var center1 = this.getCenter();
	
	if(this == obj)
	{
		return [0,0];
	}
	var collArr = this.checkCollisionDims(obj);
	if(collArr[1]>=collArr[0])
	{
		collArr[1] = 0;

	}
	else
	{
		collArr[0] = 0;
	}
	for (var i = 0; i < collArr.length; i++) {
		if(collArr[i] < 0)
		{
			collArr[i] = 0;
		}
	};
	return collArr;

}







var Rod = function(id,isVertical,x,y,length){
	var height;
	var width;
	var thin = 10;
	if(isVertical)
	{
		height = length;
		width = thin;
	}
	else
	{
		height = thin;
		width = length;
	}
	Shape.call(this,x,y,width,height,id,"rod");
	this.setColor("black"); 

}



Rod.prototype = Object.create(Shape.prototype);
Rod.prototype.constructor = Rod;




var Swing = function(x,y)
{
	//calling constructors
	this.velocityX = 0;
	this.velocityY = 0;
	var length = 100;
	var width = 30;
	Shape.call(this,x,y,length,width,"swing","swing");
	this.setColor("black");
};

Swing.prototype = Object.create(MovingShape.prototype);
Swing.prototype.constructor = Swing;

Swing.prototype.move = function (x) {
	// body...
	MovingShape.prototype.move.call(this,x,0);
}; 




var Ball = function (x,y,vx,vy) {
	// body...
	var width = 25;
	var height = width;
	Shape.call(this,x,y,width,height,"Ball","Ball");
	this.velocityX = vx;
	this.velocityY = vy;
	this.setColor("black");
}

Ball.prototype = Object.create(MovingShape.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.checkCollision = function(obj)
{
	var coll = 	MovingShape.prototype.checkCollision.call(this,obj);
	//Ball.move(coll[0],coll[1]);//to avoid object around objects
	return coll;
	
}







/*function main(){
	var s = new Swing(10,10);
	var m = new MovingShape(10,12,100,100,"id","addedClass");
	console.log(m.div);
	//m.getIntoContainer(document.body);
	//console.log(s instanceof Rod) 

	//var r = new Rod("r1",true,90,90,100);

};
main();

*/