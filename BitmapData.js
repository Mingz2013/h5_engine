/**
 * Created by zhaojm on 15/4/29.
 */
function BitmapData(image,x,y,width,height){
    var self = this;
    //self.type = "BitmapData";
    self.oncomplete = null;
    if(image){
        self.image = image;
        self.x = (x==null?0:x);
        self.y = (y==null?0:y);
        self.width = (width==null?self.image.width:width);
        self.height = (height==null?self.image.height:height);
    }else{
        self.x = 0;
        self.y = 0;
        self.width = 0;
        self.height = 0;
        self.image = new Image();
    }
}

LBitmapData.prototype = {
    setProperties:function (x,y,width,height){
        var self = this;
        self.x = x;
        self.y = y;
        self.width = width;
        self.height = height;
    },
    setCoordinate:function (x,y){
        var self = this;
        self.x = x;
        self.y = y;
    }
}