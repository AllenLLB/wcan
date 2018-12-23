function Wcan(){
    this.init();
}

Wcan.prototype.init = function(){
    this.initPramas();
    this.initCanvas();
    this.drawBackground();
};
Wcan.prototype.initPramas = function(){
    
};
Wcan.prototype.initCanvas = function(){
    var $canvas = $('#bg-can');
    $canvas[0].width = $('#canvas').width();
    $canvas[0].height = $('#canvas').height();
};
Wcan.prototype.drawBackground = function(){
    var ctx = $('#bg-can')[0].getContext('2d'), w = 0, h = 0, scale = 0;
    var img = new Image();
    img.src = 'assset/img/miss.jpg';
    img.onload = function(){
       w = img.width;
       h = img.height;
       scale = $('#canvas').height()/img.height;
       ctx.drawImage(img, 0, 0, $('#canvas').width(), h*scale);
    };
};


$(document).ready(function(){
    window.wcan = new Wcan();
});