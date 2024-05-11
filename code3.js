gdjs.redirGameCode = {};
gdjs.redirGameCode.GDcharObjects1= [];
gdjs.redirGameCode.GDcharObjects2= [];


gdjs.redirGameCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.redirGameCode.GDcharObjects1);
{for(var i = 0, len = gdjs.redirGameCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.redirGameCode.GDcharObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.redirGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.redirGameCode.GDcharObjects1.length = 0;
gdjs.redirGameCode.GDcharObjects2.length = 0;

gdjs.redirGameCode.eventsList0(runtimeScene);

return;

}

gdjs['redirGameCode'] = gdjs.redirGameCode;
