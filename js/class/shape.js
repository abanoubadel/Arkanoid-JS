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
}


Shape.prototype.getElement = function(){
	return this.div;
}

Shape.prototype.move = function(x,y)
{
	this.x+= x;
	this.y += y;
	this.setPlace();	
}
Shape.prototype.setPlace = function () {
		// body...
		if(this.div)
		{
			this.div.style.left = this.x + "px";
			this.div.style.bottom = this.y + "px";
		}
}
Shape.prototype.addClass = function (cls) {
		
		this.div.classList.add(cls);
		
}


Shape.prototype.setColor = function(color)
{
	this.div.style.backgroundColor = color;

}

Shape.prototype.generateHtml = function() {
		this.div = document.createElement("div");
		//this.div.classList.add(this.initialClass);
		this.addClass(this.initialClass);
		this.addClass(this.addedClass);
		this.div.id= this.id;
		this.div.style.width = this.width+"px";
		this.div.style.height = this.height+"px";
		this.setPlace();
};



var Rod = function(id,isVertical,x,y,length){
	var height;
	var width;

	if(isVertical)
	{
		height = length;
		width = 0;
	}
	else
	{
		height = 0;
		width = length;
	}
	Shape.call(this,x,y,width,height,id,"");


}

Rod.prototype = Object.create(Shape.prototype);
Rod.prototype.constructor = Rod;



var Swing = function(x,y)
{
	//calling constructors
	Shape.call(this,x,y,100,10,"swing","swing");
	this.setColor("black");
} 

Swing.prototype = Object.create(Shape.prototype);
Swing.prototype.constructor = Swing;









function main(){
	//var k = new Shape(10,10,10,10,"test","t");
	//k.getIntoContainer(document.body);
	//console.log(k.div);
	s = new Swing(10,10);
	//s.getIntoContainer(document.body);
	//var r = new Rod("r1",true,90,90,100);

};
main();