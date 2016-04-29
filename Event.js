/**
 * Created by zhaojm on 15/4/29.
 */
var Event = function (){};
Event.COMPLETE = "complete";
Event.ENTER_FRAME = "enter_frame";


Event.currentTarget = null;
Event.addEventListener = function (node, type, fun){
    if(node.addEventListener){
        node.addEventListener(type, fun, false);
    }else if(node.attachEvent){
        node['e' + type + fun] = fun;
        node[type + fun] = function(){node['e' + type + fun]();}
        node.attachEvent('on' + type, node[type + fun]);
    }
}