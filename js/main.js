/******************************************************************************
   _____         __                         .__    .___      ____. _________
  /  _  \_______|  | _______    ____   ____ |__| __| _/     |    |/   _____/
 /  /_\  \_  __ \  |/ /\__  \  /    \ /  _ \|  |/ __ |      |    |\_____  \ 
/    |    \  | \/    <  / __ \|   |  (  <_> )  / /_/ |  /\__|    |/        \
\____|__  /__|  |__|_ \(____  /___|  /\____/|__\____ |  \________/_______  /
        \/           \/     \/     \/               \/                   \/ 

											Javascript Project

*******************************************************************************/

var Menu = function(){
	this.items = ["Start", "Exit"];
	this.html = new String();
	this.generateHTML = function(){
		this.html += '<ul>';
		for (var i = 0; i < this.items.length; i++) {
			this.html += '<li>' + this.items[i] + '</li>';
		};
		this.html += '</ul>';
		return this.html;
	};
};

var Layout = function(){
	var id = "game";
	var game = document.getElementById(id);

	this.clear = function(){
		game.innerHTML = '';
	};

	this.append = function(element) {
		game.innerHTML += element;
	};
};

var Level = function(){
	this.id;
	this.score;
	this.time;
	this.difficulty;
	this.shape;

	this.prototype.draw = function() {
		switch(shape){
			case 'rect':
				{
					for (var i = 0; i < .length; i++) {
						[i]
					};
				}
				break;
		}	
	};
};

var Window = function(){
	this.id = 'game';
	this.width = 400;
	this.height = 800;
	this.html = document.createElement('div');
	this.html.id = this.id;
	this.html.style.width = this.width;
	this.html.style.height = this.height;
};

var Game = function(){
	// var menu = new Menu();
	var window = new Window();
	var layout = new Layout();
	// layout.append( menu.generateHTML() );
};

var main = function(){
	var game = new Game();
}();