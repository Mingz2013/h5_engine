/**
 * Created by zhaojm on 15/4/29.
 */
var list = new Array();
var index = 0;
var mapimg;
var loader
var imageArray;
var animeIndex = 0;
var dirindex = 0;
var dirarr = new Array({x:0,y:1},{x:-1,y:0},{x:1,y:0},{x:0,y:-1});
function main(){
    loader = new LLoader();
    loader.addEventListener(LEvent.COMPLETE,loadBitmapdata);
    loader.load("1.png","bitmapData");
}
function loadBitmapdata(event){
    var bitmapdata = new LBitmapData(loader.content,0,0,70,92);
    imageArray = LGlobal.divideCoordinate(bitmapdata.image.width,bitmapdata.image.height,8,8);
    mapimg = new LBitmap(bitmapdata);
    mapimg.x = 100;
    mapimg.bitmapData.setCoordinate(0,0);
    index = 0;
    var backLayer = new LSprite();
    addChild(backLayer);
    backLayer.addChild(mapimg);
    backLayer.addEventListener(LEvent.ENTER_FRAME, onframe)
}


function onframe(){
    index++;
    if(index >= imageArray[0].length){
        index = 0;
    }
    mapimg.bitmapData.setCoordinate(imageArray[dirindex][index].x,imageArray[dirindex][index].y);

    mapimg.x += dirarr[dirindex].x*3;
    mapimg.y += dirarr[dirindex].y*3;
    if(animeIndex++ > 20){
        dirindex++;
        if(dirindex > 3)dirindex = 0;
        animeIndex = 0;
    }
}