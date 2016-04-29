/**
 * Created by zhaojm on 15/4/29.
 */
var Global = function(){};
Global.canvas = null;
Global.context = null;
Global.width = 0;
Global.height = 0;
Global.childList = new Array();

Global.setCanvas = function(id, width, height){
    Global.canvas = document.getElementById(id);
    if(width)Global.canvas.width = width;
    if(height)Global.canvas.height = height;
    Global.width = Global.canvas.width;
    Global.height = Global.canvas.height;

    Global.context = Global.canvas.getContext('2d');

    Event.addEventListener(Global.canvas,MouseEvent.MOUSE_DOWN,function(event){
        Global.mouseEvent(event,MouseEvent.MOUSE_DOWN);
    });
};


Global.onDraw = function(){
    if(Global.context == null)return;
    Global.context.clearRect(0, 0, Global.width, Global.height);
    Global.draw(Global.childList);
};

Global.draw = function(childList){
    var key;
    for(key in childList){
        if(childList[key].draw){
            childList[key].draw();
        }
    }
};

Global.addChild = function(DisplayObject){
    Global.childList.push(DisplayObject);
};

Global.mouseEvent = function(event,type){
    var key;
    for(key in Global.childList){
        if(Global.childList[key].mouseEvent){
            Global.childList[key].mouseEvent(event,type);
        }
    }
}