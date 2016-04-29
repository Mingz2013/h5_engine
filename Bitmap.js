/**
 * Created by zhaojm on 15/4/29.
 */
function Bitmap(bitmapdata){
    var self = this;
    //self.type = "Bitmap";
    self.x = 0;
    self.y = 0;
    self.width = 0;
    self.height = 0;
    self.scaleX=1;
    self.scaleY=1;
    self.visible=true;
    self.bitmapData = bitmapdata;
    if(self.bitmapData){
        self.width = self.bitmapData.width;
        self.height = self.bitmapData.height;
    }
}

Bitmap.prototype = {
    draw:function (){
        var self = this;
        if(!self.visible)return;
        Global.canvas.drawImage(self.bitmapData.image,
            self.bitmapData.x,self.bitmapData.y,self.bitmapData.width,self.bitmapData.height,
            self.x,self.y,self.width*self.scaleX,self.height*self.scaleY);
    },

    ismouseon:function(event,cood){
        var self = this;
        if(event.offsetX >= self.x + cood.x && event.offsetX <= self.x + cood.x + self.width &&
            event.offsetY >= self.y + cood.y && event.offsetY <= self.y + cood.y + self.height){
            return true;
        }else{
            return false;
        }
    },
}