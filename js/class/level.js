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
