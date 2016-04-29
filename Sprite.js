/**
 * Created by zhaojm on 15/4/29.
 */
function LSprite(){
    var self = this;
    self.type = "LSprite";
    self.x = 0;
    self.y = 0;
    self.visible=true;
    self.childList = new Array()
    self.frameList = new Array();
}
LSprite.prototype = {
    show:function (cood){
        if(cood==null)cood={x:0,y:0};
        var self = this;
        if(!self.visible)return;
        LGlobal.show(self.childList,{x:self.x+cood.x,y:self.y+cood.y});
        self.loopframe();
    },
    loopframe:function (){
        var self = this;
        var key;
        for(key in self.frameList){
            self.frameList[key]();
        }
    },
    addChild:function (DisplayObject){
        var self  = this;
        self.childList.push(DisplayObject);
    },
    addEventListener:function (type,listener){
        var self = this;
        if(type == LEvent.ENTER_FRAME){
            self.frameList.push(listener);
        }
    },
    removeEventListener:function (type,listener){
        var self = this;
        var i,length = self.frameList.length;
        for(i=0;i<length;i++){
            if(type == LEvent.ENTER_FRAME){
                self.frameList.splice(i,1);
                break;
            }
        }
    },

    mouseEvent:function (event,type,cood){
        if(cood==null)cood={x:0,y:0};
        var self = this;
        if(self.mouseList.length == 0){
            for(key in self.childList){
                if(self.childList[key].mouseEvent){
                    self.childList[key].mouseEvent(event,type,{x:self.x+cood.x,y:self.y+cood.y});
                }
            }
            return;
        }
        if(self.childList.length == 0)return;
        var key;
        var isclick = false;
        for(key in self.childList){
            isclick = self.childList[key].ismouseon(event,{x:self.x+cood.x,y:self.y+cood.y});
            if(isclick)break;
        }
        if(isclick){
            for(key in self.mouseList){
                var obj = self.mouseList[key];
                if(obj.type == type){
                    event.selfX = event.offsetX - (self.x+cood.x);
                    event.selfY = event.offsetY - (self.y+cood.y);
                    event.currentTarget = self;
                    obj.listener(event);
                }
            }
            return;
        }

    },
    ismouseon:function(event,cood){
        var self = this;
        var key;
        var isclick = false;
        for(key in self.childList){
            isclick = self.childList[key].ismouseon(event,{x:self.x+cood.x,y:self.y+cood.y});
            if(isclick)break;
        }
        return isclick;
    }
}