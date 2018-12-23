function Wcan(){
    this.init();
}

Wcan.prototype.init = function(){
    this.initPramas();
    this.initCanvas();
    this.handlerPreImg();
};
Wcan.prototype.initPramas = function(){
    this.$win = $('#wcan');
    this.$can = this.$win.find('#can');
    this.ctx = this.$can[0].getContext('2d');
    this.wcanImg = $('#wcan-img')[0];
};
Wcan.prototype.initCanvas = function(){
    this.$can[0].height = this.$win.height();
    this.$can[0].width = this.$win.width();
};
Wcan.prototype.handlerPreImg = function(){
    var imgObj = new Image(), self = this;
    imgObj.src = this.wcanImg.src;
    imgObj.onload = function(){
        self.drawCanImage(imgObj);
    };
};
Wcan.prototype.drawCanImage = function(image){
    var h = image.height, w = image.width, scale = this.$win.width()/w;
    image.width = w*scale;
    image.height = h*scale;
    this.ctx.drawImage(image, 0, 0, w*scale, h*scale);
};


$(document).ready(function(){
    window.wcan = new Wcan();
});