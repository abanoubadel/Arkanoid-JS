var Physics = function(objs)
{
	this.objects = objs;
}





Physics.prototype.move= function()
{
	
	//iterating overall objects
	for(var movingObject = 0 ; movingObject<this.objects.length ; movingObject++ )
	{
		var obj = this.objects[movingObject];
		if(obj instanceof MovingShape)
		{
			var collArray = [0,0];
			for(var collidingOBject = 0; collidingOBject<this.objects.length; collidingOBject++)
			{
				var obj2 = this.objects[collidingOBject];
				if(obj != obj2)
				{
					//var colls = obj.checkCollision(obj2);
					var colls = obj2.checkCollision(obj);
					collArray[0] += colls[0];
					collArray[1] += colls[1];
				}




			}

			obj.revertVelocity(collArray);
			obj.inertia();

		}	
	}
}

