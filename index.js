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
    console.log(this.$can, this.ctx);
};



$(document).ready(function(){
    window.wcan = new Wcan();
});