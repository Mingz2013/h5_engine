/**
 * Created by zhaojm on 15/4/29.
 */
function Loader(){
    var self = this;
    self.loadtype = "";
    self.content = null;
    self.oncomplete = null;
    self.event = {};
}
Loader.prototype = {
    addEventListener:function(type,listener){
        var self = this;
        if(type == Event.COMPLETE){
            self.oncomplete = listener;
        }
    },
    load:function (src,loadtype){
        var self = this;
        self.loadtype = loadtype;
        if(self.loadtype == "bitmapData"){
            self.content = new Image();
            self.content.onload = function(){
                if(self.oncomplete){
                    self.event.currentTarget = self.content;
                    self.oncomplete(self.event);
                }
            }
            self.content.src = src;
        }
    }
}