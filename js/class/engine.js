
var Engine = function(swing,min,max){
	this.swing = swing;
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
			swing.setX(max);
			return;
		}
		//alert(event.keyCode);
		if(event.keyCode === RIGHT)
		{
			if(swing.getX() > max)
			{
				swing.setX(max);
				return;
			}
		
				
				
			swing.move(step);
		}
		else if(event.keyCode === LEFT)
		{
			if(swing.getX() < min)
			{
				swing.setX(min);
				return;
			}

			swing.move(-step);
		}
	}


}








function main(){
	var s = new Swing(10,10);
	s.getIntoContainer(document.body);
	var  e = new Engine(s,80,700);
	//var m = new MovingShape(10,12,100,100,"id","addedClass");
	//console.log(m.div);

}
main();

