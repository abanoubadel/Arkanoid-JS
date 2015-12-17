var Physics = function()
{
	this.objects = [];
}





Physics.prototype.addObject = function(obj) {
	// body...
	this.objects.push(obj);
};


Physics.prototype.move= function(objects)
{

	for(var movingObject = 0 ; movingObject<objects.length ; movingObject++ )
	{
		var obj = objects[movingObject];
		if(obj instanceof MovingShape)
		{
			var collArray = [0,0];
			for(var collidingOBject = 0; collidingOBject<objects.length ; collidingOBject++)
			{
				var obj2 = objects[collidingOBject];
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
