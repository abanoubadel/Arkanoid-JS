
var Engine = function(swing,min,max){
	this.swing = swing;
	var first_time = true;
	window.onkeydown = function  (event) {
		var RIGHT = 39;
		var LEFT = 37;
		var step  = 10;
		if(swing.getX() < min)
		{
			swing.setX(min);
			return;
		}
		if(swing.getX() + swing.getWidth() > max )
		{
			swing.setX(max-swing.getWidth());
			return;
		}
		//alert(event.keyCode);
		if(event.keyCode === RIGHT)
		{
			if(swing.getX()+ swing.getWidth()+step >= max)
			{
				swing.setX(max-swing.getWidth());
				return;
			}
		
				
				
			swing.move(step);
		}
		else if(event.keyCode === LEFT)
		{
			if(swing.getX() <= min)
			{
				swing.setX(min);
				return;
			}

			swing.move(-step);
		}
	}


}



var Physics = function()
{
	this.objects = [];
}





Physics.prototype.addObject = function(obj) {
	// body...
	this.objects.push(obj);
};


Physics.prototype.move= function()
{
	for(var movingObject = 0 ; movingObject<this.objects.length ; movingObject++ )
	{
		var obj = this.objects[movingObject];
		if(obj instanceof MovingShape)
		{
			var collArray = [0,0];
			for(var collidingOBject = 0; collidingOBject<this.objects.length ; collidingOBject++)
			{
				var obj2 = this.objects[collidingOBject];
				var center1 = obj2.getCenter();
				var center2 = obj.getCenter();
				if(obj != obj2)
				{
					var colls = obj.checkCollision(obj2);
					collArray[0] += colls[0];
					collArray[1] += colls[1];
				}




			}

			obj.revertVelocity(collArray);
			obj.inertia();

		}	
	}
}














function main(){
	var s = new Swing(10,10);
	var b = new Ball(10,10,10,10);
	s.getIntoContainer(document.body);
	b.getIntoContainer(document.body);
	var  e = new Engine(s,80,700);

	var p = new Physics();
	p.addObject(s);
	p.addObject(b)
	p.move();

}
main();

