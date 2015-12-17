var Shape = function(x, y, width, height, id, addedClass) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.id = id;

   // this.initialClass = "position";
    var initialClass = "position";
    this.addedClasses = [addedClass,initialClass];
};

//for regression

/*Shape.prototype.addStyle = function(style, value) {
    this.div.style[style] = value;
}*/


Shape.prototype.getCenter = function() {
    return [this.x + this.width / 2, this.y + this.height / 2];
}


Shape.prototype.addClass = function(cls) {

    this.addedClasses.push(cls);

}

Shape.prototype.getClasses = function(cls) {

    return this.addedClasses;

}






Shape.prototype.getX = function() {
    return this.x;
};

Shape.prototype.getY = function() {
    return this.y;
};

Shape.prototype.getWidth = function() {
    return this.width;
};

Shape.prototype.getHeight = function() {
    return this.height;
};

Shape.prototype.getDims = function() {
    return [this.width, this.height];
};

Shape.prototype.getDimSize = function() {
    return 2;
};

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
