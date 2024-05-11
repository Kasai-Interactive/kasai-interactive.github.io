gdjs.gameCode = {};
gdjs.gameCode.GDbgObjects1= [];
gdjs.gameCode.GDbgObjects2= [];
gdjs.gameCode.GDwaterObjects1= [];
gdjs.gameCode.GDwaterObjects2= [];
gdjs.gameCode.GDplatformTestObjects1= [];
gdjs.gameCode.GDplatformTestObjects2= [];
gdjs.gameCode.GDScoreObjects1= [];
gdjs.gameCode.GDScoreObjects2= [];
gdjs.gameCode.GDpressmblieObjects1= [];
gdjs.gameCode.GDpressmblieObjects2= [];
gdjs.gameCode.GDcharObjects1= [];
gdjs.gameCode.GDcharObjects2= [];


gdjs.gameCode.eventsList0 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpressmblieObjects1Objects = Hashtable.newFrom({"pressmblie": gdjs.gameCode.GDpressmblieObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplatformTestObjects1Objects = Hashtable.newFrom({"platformTest": gdjs.gameCode.GDplatformTestObjects1});
gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


gdjs.gameCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "waterMOvement") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.gameCode.GDwaterObjects1);
{for(var i = 0, len = gdjs.gameCode.GDwaterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDwaterObjects1[i].addForceTowardPosition(gdjs.randomInRange(-(20), -(100)), gdjs.randomInRange(1800, 1700), gdjs.randomInRange(40, 70), 0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waterMOvement");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.gameCode.GDcharObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waterMOvement");
}{for(var i = 0, len = gdjs.gameCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "genLenght");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.gameCode.GDcharObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pressmblie"), gdjs.gameCode.GDpressmblieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDpressmblieObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.gameCode.GDcharObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.gameCode.GDcharObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "genLenght") < 25;
if (isConditionTrue_0) {
gdjs.gameCode.GDplatformTestObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplatformTestObjects1Objects, 800 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), 425, "");
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(550);
}{for(var i = 0, len = gdjs.gameCode.GDplatformTestObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplatformTestObjects1[i].getBehavior("Resizable").setWidth(gdjs.randomInRange(300, 600));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.gameCode.GDcharObjects1);
{for(var i = 0, len = gdjs.gameCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDcharObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.gameCode.GDcharObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDcharObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcharObjects1[i].getY() > 1800 ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDcharObjects1[k] = gdjs.gameCode.GDcharObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcharObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.gameCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.gameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDbgObjects1.length = 0;
gdjs.gameCode.GDbgObjects2.length = 0;
gdjs.gameCode.GDwaterObjects1.length = 0;
gdjs.gameCode.GDwaterObjects2.length = 0;
gdjs.gameCode.GDplatformTestObjects1.length = 0;
gdjs.gameCode.GDplatformTestObjects2.length = 0;
gdjs.gameCode.GDScoreObjects1.length = 0;
gdjs.gameCode.GDScoreObjects2.length = 0;
gdjs.gameCode.GDpressmblieObjects1.length = 0;
gdjs.gameCode.GDpressmblieObjects2.length = 0;
gdjs.gameCode.GDcharObjects1.length = 0;
gdjs.gameCode.GDcharObjects2.length = 0;

gdjs.gameCode.eventsList1(runtimeScene);

return;

}

gdjs['gameCode'] = gdjs.gameCode;
