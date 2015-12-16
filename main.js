var Shape = function(){
	var id, name, height, width, image, xPos, yPos;
	id = 5;

	this.getId = function(){
		return id;
	}

};

var Menu = function(){
	var items = ["Start", "Exit"];
	var html = '';
	Menu.prototype.load = function(){
		html += '<ul>';
		for (var i = 0; i < items.length; i++) {
			html += '<li>' + items[i] + '</li>';
		};
		html += '</ul>';
		return html;
	};
};

var Game = function(){

	Game.prototype.append = function(element) {
		var id = "game";
		var game = document.getElementById(id);
		game.innerHTML += element;
	};

	console.log(  );

	var menu = new Menu();
	//.append( menu.load() );
	// var Draw = function(){
	// 	for (var i = 0; i < shapeArr.length; i++) {
	// 		shapeArr[i].draw();
	// 	};
	// };
	// Draw();

};

var main = function(){

	Game();
	var shape = new Shape();
	console.log( shape.getId() );

}();