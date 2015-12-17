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
