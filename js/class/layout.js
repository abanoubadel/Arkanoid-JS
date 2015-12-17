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
