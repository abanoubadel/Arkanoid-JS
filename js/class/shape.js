var Shape = function(x, y, width, height, id, addedClass) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.id = id;
    this.initialClass = "position";
    this.addedClass = addedClass;
    this.generateHtml();
};

Shape.prototype.addStyle = function(style, value) {
    this.div.style[style] = value;
}

Shape.prototype.getIntoContainer = function(container) {
    this.div = container.appendChild(this.div);
}

Shape.prototype.getCenter = function() {
    return [this.x + this.width / 2, this.y + this.height / 2];
}

Shape.prototype.getWidth = function() {
    return this.width;
}

Shape.prototype.getHeight = function() {
    return this.height;
}

Shape.prototype.getElement = function() {
    return this.div;
}

Shape.prototype.setPlace = function() {
    // body...
    if (this.div) {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}
Shape.prototype.addClass = function(cls) {

    this.div.classList.add(cls);

}



Shape.prototype.setColor = function(color) {
    this.div.style.backgroundColor = color;

};

Shape.prototype.generateHtml = function() {
    this.div = document.createElement("div");
    this.div.classList.add(this.initialClass);
    this.addClass(this.initialClass);
    this.addClass(this.addedClass);
    this.div.id = this.id;
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.setPlace();
};

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
