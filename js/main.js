/******************************************************************************
   _____         __                         .__    .___      ____. _________
  /  _  \_______|  | _______    ____   ____ |__| __| _/     |    |/   _____/
 /  /_\  \_  __ \  |/ /\__  \  /    \ /  _ \|  |/ __ |      |    |\_____  \ 
/    |    \  | \/    <  / __ \|   |  (  <_> )  / /_/ |  /\__|    |/        \
\____|__  /__|  |__|_ \(____  /___|  /\____/|__\____ |  \________/_______  /
        \/           \/     \/     \/               \/                   \/ 

                                            Javascript Project

*******************************************************************************/
var Window = function() {
    this.id = 'game';
    this.width = Config.Window.width;
    this.height = Config.Window.height;
    this.html = document.createElement('div');
    this.html.id = this.id;
    this.html.style.width = this.width + "px";
    this.html.style.height = this.height + "px";
    document.body.insertBefore(this.html, document.body.childNodes[0]);
};

var Menu = function() {
    this.items = ["Start", "Exit"];
    this.html = new String();
    this.generateHTML = function() {
        this.html += '<ul>';
        for (var i = 0; i < this.items.length; i++) {
            this.html += '<li>' + this.items[i] + '</li>';
        };
        this.html += '</ul>';
        return this.html;
    };
};

var Layout = function() {
    var id = "game";
    var game = document.getElementById(id);

    this.clear = function() {
        game.innerHTML = '';
    };

    this.append = function(element) {
        game.appendChild(element);
    };
};

var Level = function() {
    this.current = Config.Level.start;
    this.html = document.createElement('div');
    this.html.id = Config.Level.id;

    this.loadConfig = function() {
        var level = Config.Level.levels[this.current - 1];
        this.shape = level.shape;
        this.time = level.time;
        this.difficulty = level.difficulty;
    };
    this.next = function() {
        this.current++;
    };
    this.prev = function() {
        this.current--;
    };
    this.draw = function() {
        this.shape = level1.split("\n");
        var rows = this.shape.length;
        var cols = this.shape[0].length;
        this.html.style.width = cols * Config.Block.width + "px";
        this.html.style.height = rows * Config.Block.height + "px";

        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (this.shape[i][j] != ' ') {
                    var block = new Block(
                        'block-' + (i + j), // id
                        j * (Config.Block.width + Config.Block.margin), //x axis
                        i * (Config.Block.height + Config.Block.margin), // y axis
                        'block' // class
                    );
                    block.setRandomColor();
                    block.getIntoContainer(this.html);
                }
            }
        };

        return this.html;
    };
    this.loadConfig();
};

var Game = function() {
    // var menu = new Menu();
    var window = new Window();
    var level = new Level();
    var layout = new Layout();
    // layout.append( menu.generateHTML() );
    layout.append(level.draw());
};

var main = function() {
    var game = new Game();
}();
