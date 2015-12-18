var Shape = function(x, y, width, height, id, addedClass) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.id = id;
    this.Destroyed = false;
   // this.initialClass = "position";
    var initialClass = "position";
    this.addedClasses = [addedClass,initialClass];
};

Shape.prototype.isDestroyed = function() {
    return this.Destroyed;
}

Shape.prototype.destroy = function() {
    this.Destroyed = true;
}





//for regression

/*Shape.prototype.addStyle = function(style, value) {
    this.div.style[style] = value;
}*/

Shape.prototype.getId = function() {
    return this.id;
}

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

Shape.prototype.checkCollisionDims = function(obj) {
    var center1 = this.getCenter();
    var center2 = obj.getCenter();
    var dim1 = this.getDims();
    var dim2 = obj.getDims();
    var collisionDim = [];
    
    for (var i = 0; i < this.getDimSize(); i++) {
        collisionDim.push(-1 * Math.abs(center1[i] - center2[i]) + (dim1[i] + dim2[i]) / 2);
    };
    


    var CollisionHappened = true;

    for (var i = 0; i < collisionDim.length; i++) {
        if (collisionDim[i] < 0) {
            CollisionHappened = false;
        }
    };
    if (!CollisionHappened) {
        for (var i = 0; i < collisionDim.length; i++) {
            collisionDim[i] = 0;
        };
    }

    return collisionDim;


}


Shape.prototype.checkCollision = function(obj) {
    var center2 = obj.getCenter();
    var center1 = this.getCenter();

    if (this == obj) {
        return [0, 0];
    }
    var collArr = this.checkCollisionDims(obj);



    if (collArr[1] >= collArr[0]) {
        collArr[1] = 0;

    } else {
        collArr[0] = 0;
    }
    for (var i = 0; i < collArr.length; i++) {
        if (collArr[i] < 0) {
            collArr[i] = 0;
        }
    };

    //moving the on the root
    var placeY = obj.getY();
    var placeX = obj.getX();

    if(collArr[1] > 0){
        if(obj.getY() < this.getY()){
            placeY = this.getY()-obj.getHeight();
        }
        else
        {
            placeY = this.getY()+this.getHeight();   
        }

    }
    
    else if(collArr[0] > 0){
        if(obj.getX() < this.getX()){
            placeX = this.getX()-obj.getWidth();
        }
        else
        {
            placeX = this.getX()+this.getWidth();   
        }

    }
    

    /*if(collArr[1]>this.width/2)
    {
        place = this.getY();
    }
    else
    {
        place = this.getY();
    }*/
    obj.setY(placeY);
    obj.setX(placeX);
    if(this.isHitted(collArr))
    {
        this.whenCollided(obj);        
    }
    return collArr;

}

Shape.prototype.whenCollided=function(obj){

}


Shape.prototype.isHitted = function(result){
for (var i = 0; i < result.length; i++) {
    if (result[i]> 0) {
        return true;

    };
    
};
return false;

}



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



