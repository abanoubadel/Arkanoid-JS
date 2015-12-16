var Shape = function (x,y,width,height,id) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.id = id;
	this.cl = "position";
	this.getdrawing();
	

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

Shape.prototype.getdrawing = function() {
		this.div = document.createElement("div");
		this.div.classList.add(this.cl);
		this.div.id= this.id;
		this.div.style.width = this.width+"px";
		this.div.style.height = this.height+"px";
		this.div.style.backgroundColor = "black";
		this.setPlace();
		//setPlace(d,this.x,this.y);
		

};



var 









function main(){
	var k = new Shape(10,10,10,10,"test","t");
	k.getIntoContainer(document.body);
	//console.log(k.div);

};
main();