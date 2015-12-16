
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









function main(){
	var s = new Swing(10,10);
	s.getIntoContainer(document.body);
	var  e = new Engine(s,80,700);

}
main();

