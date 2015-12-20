var heart = "   ,.   :`  \n";
heart    += "  @@@@;@@@  \n";
heart    += " #@@@@@@@@@ \n";
heart    += " @@@'@@@@@@ \n";
heart    += " ,@#.@@@@@@ \n";
heart    += "   `@#@@@@+ \n";
heart    += "  `@@ @,,,  \n";
heart    += "   ,@+ @@   \n";
heart    += "    ;@+@    \n";
heart    += "     #@`      ";

var circle = "   @@@@@   \n";
circle    += "  @@@@@@@  \n";
circle    += "  @@   @@  \n";
circle    += "  @@   @@  \n";
circle    += "  @@   @@  \n";
circle    += "  @@   @@  \n";
circle    += "  @@@@@@@  \n";
circle    += "   @@@@@     ";

var triangle = "             \n";    
triangle    += "      @      \n";
triangle    += "     @@@     \n";
triangle    += "    @@@@@    \n";
triangle    += "   @@@@@@@   \n";
triangle    += "  @@@@@@@@@  \n";
triangle    += " @@@@@@@@@@@   ";


var Config = {
    Window: {
        id: 'name',
        width: 850,
        height: 600,
    },
    Level: {
    	id: 'levelShape',
        start: 1,
        levels: [{
            time: 5, // in mints
            difficulty: 0, //
            shape: triangle,
        }, {
            time: 3, // in mints
            difficulty: 1, //
            shape: circle,
        }, {
            time: 1, // in mints
            difficulty: 2, //
            shape: heart,
        }],
        height: 200, //prefer to be 70% of window height
        width: 300
    },
    Block: {
        width: 64,
        height: 32,
        margin: 5,
    },
    Swing:{
        width: 162,
        height: 25,
    },
    Rod:{
        dim: 21
    }
};
