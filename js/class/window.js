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