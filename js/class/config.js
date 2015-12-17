var Config = {
    Window: {
        id: 'name',
        width: 1000,
        height: 500,
    },
    Level: {
    	id: 'levelShape',
        start: 1,
        levels: [{
            time: 5, // in mints
            difficulty: 0, //
            shape: 'rect'
        }, {
            time: 3, // in mints
            difficulty: 1, //
            shape: 'rect'
        }, {
            time: 1, // in mints
            difficulty: 2, //
            shape: 'rect'
        }],
        height: 200, //prefer to be 70% of window height
        width: 300
    },
    Block: {
        width: 60,
        height: 25,
        margin: 5,
    },
    Swing:{
        width: 162,
        height: 25,
    }
};
