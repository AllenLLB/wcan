function Wcan(){
    this.init();
}

Wcan.prototype.init = function(){
    this.initPramas();
    this.initCanvas();
};
Wcan.prototype.initPramas = function(){
    this.$win = $('#wcan');
    this.$can = this.$win.find('#can');
    this.ctx = this.$can[0].getContext('2d');
};
Wcan.prototype.initCanvas = function(){
    this.$can[0].height = this.$win.height();
    this.$can[0].width = this.$win.width();
};


$(document).ready(function(){
    window.wcan = new Wcan();
});