var Level = function(objects) {
    this.blockCount = 0;
    this.current = Config.Level.start;
    this.loadConfig = function() {
        var level = Config.Level.levels[this.current - 1];
        this.shape = level.shape.split("\n");
        this.time = level.time;
        this.difficulty = level.difficulty;
    };
    this.next = function() {
        this.current++;
    };
    this.prev = function() {
        this.current--;
    };
    this.decreaseBlocks = function(num){
        this.blockCount -= num;
        if(this.blockCount <= 0)
        {
            this.next();
            this.loadConfig();
            this.generate();
            return true;
        }
        return false;
    }
    this.generate = function() {
        this.rows = this.shape.length;
        this.cols = this.shape[0].length;
        //
        var center = (Config.Window.width - (this.cols * (Config.Block.width + Config.Block.margin))) / 2;

        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                if (this.shape[i][j] != ' ') {
                    var block = new Block(
                        'block-' + (i * this.cols + j), // id
                        (j * (Config.Block.width + Config.Block.margin)) + center, //x axis
                        i * (Config.Block.height + Config.Block.margin), // y axis
                        'block' // class
                    );
                    block.setRandomColor();
                    objects.items.push(block);
                    this.blockCount++;
                }
            }
        };
    };
    // this.draw = function() {
    //     this.shape = level1.split("\n");
    //     var rows = this.shape.length;
    //     var cols = this.shape[0].length;


    //     for (var i = 0; i < rows; i++) {
    //         for (var j = 0; j < cols; j++) {
    //             if (this.shape[i][j] != ' ') {
    //                 var block = new Block(
    //                     'block-' + (i + j), // id
    //                     j * (Config.Block.width + Config.Block.margin), //x axis
    //                     i * (Config.Block.height + Config.Block.margin), // y axis
    //                     'block' // class
    //                 );
    //                 block.setRandomColor();
    //                 block.getIntoContainer(this.html);
    //             }
    //         }
    //     };

    //     return this.html;
    // };
    this.loadConfig();
    this.generate();
};
