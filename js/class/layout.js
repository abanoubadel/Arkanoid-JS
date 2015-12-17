var Layout = function( objects ) {
    var id = "game";
    var game = document.getElementById(id);

    this.clear = function() {
        game.innerHTML = '';
    };

    this.append = function(element) {
        game.appendChild(element);
    };

    this.draw = function(){
    	for (var i = 0; i < objects.length; i++) {
    		var div = document.createElement('div');
    		div.id = objects[i].getId();
    		div.style.left = objects[i].getX();
    		div.style.top = objects[i].getY();
    		div.style.width = objects[i].getWidth();
    		div.style.height = objects[i].getHeight();
    		var classes = objects[i].getClasses();

    		for (var j = 0; j < classes.length; j++) {
    			div.classList.add(classes[j]);
    		};

    		this.append(div);
    	};
    };

};
