var Shape = function(x, y, width, height, id, addedClass, BGcolor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.backgroundColor = BGcolor;
    this.id = id;
    this.initialClass = "position";
    this.addedClass = addedClass;
    this.generateHtml();



};

Shape.prototype.getIntoContainer = function(container) {
    this.div = container.appendChild(this.div);
}


Shape.prototype.getElement = function() {
    return this.div;
}

Shape.prototype.setPlace = function() {
    // body...
    if (this.div) {
        this.div.style.left = this.x + "px";
        // this.div.style.bottom = this.y + "px";
        this.div.style.top = this.y + "px";
    }
}
Shape.prototype.addClass = function(cls) {

    this.div.classList.add(cls);

}


Shape.prototype.setColor = function(color) {
    this.div.style.backgroundColor = color;

}

Shape.prototype.generateHtml = function() {
    this.div = document.createElement("div");
    //this.div.classList.add(this.initialClass);
    this.addClass(this.initialClass);
    this.addClass(this.addedClass);
    this.div.id = this.id;
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.div.style.backgroundColor = this.backgroundColor;
    this.setPlace();
};



var MovingShape = function(x, y, width, height, id, addedClass) {
    Shape.call(this, x, y, width, height, id, addedClass);
}
MovingShape.prototype = Object.create(Shape.prototype);
MovingShape.prototype.constructor = MovingShape;

MovingShape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    this.setPlace();
}









var Rod = function(id, isVertical, x, y, length) {
    var height;
    var width;

    if (isVertical) {
        height = length;
        width = 0;
    } else {
        height = 0;
        width = length;
    }
    Shape.call(this, x, y, width, height, id, "");


}

Rod.prototype = Object.create(Shape.prototype);
Rod.prototype.constructor = Rod;



var Swing = function(x, y) {
    //calling constructors
    Shape.call(this, x, y, 100, 10, "swing", "swing");
    this.setColor("black");
}

Swing.prototype = Object.create(MovingShape.prototype);
Swing.prototype.constructor = Swing;

// function main(){
// 	var s = new Swing(10,10);
// 	var m = new MovingShape(10,12,100,100,"id","addedClass");
// 	console.log(m.div);
// 	//m.getIntoContainer(document.body);
// 	//console.log(s instanceof Rod) 

// 	//var r = new Rod("r1",true,90,90,100);

// };
// main();
