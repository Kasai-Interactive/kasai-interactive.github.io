gdjs.menuCode = {};
gdjs.menuCode.GDbgObjects1= [];
gdjs.menuCode.GDbgObjects2= [];
gdjs.menuCode.GDwaterObjects1= [];
gdjs.menuCode.GDwaterObjects2= [];
gdjs.menuCode.GDplatformTestObjects1= [];
gdjs.menuCode.GDplatformTestObjects2= [];
gdjs.menuCode.GDjumpAiObjects1= [];
gdjs.menuCode.GDjumpAiObjects2= [];
gdjs.menuCode.GDintroObjects1= [];
gdjs.menuCode.GDintroObjects2= [];
gdjs.menuCode.GDinactiveObjects1= [];
gdjs.menuCode.GDinactiveObjects2= [];
gdjs.menuCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.menuCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.menuCode.GDNewVideoObjects1= [];
gdjs.menuCode.GDNewVideoObjects2= [];
gdjs.menuCode.GDskinsObjects1= [];
gdjs.menuCode.GDskinsObjects2= [];
gdjs.menuCode.GDbetaTXT_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595Objects1= [];
gdjs.menuCode.GDbetaTXT_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595Objects2= [];
gdjs.menuCode.GDNewTextObjects1= [];
gdjs.menuCode.GDNewTextObjects2= [];
gdjs.menuCode.GDcharObjects1= [];
gdjs.menuCode.GDcharObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "waterMOvement") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.menuCode.GDwaterObjects1);
{for(var i = 0, len = gdjs.menuCode.GDwaterObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDwaterObjects1[i].addForceTowardPosition(gdjs.randomInRange(-(20), -(100)), gdjs.randomInRange(1800, 1700), gdjs.randomInRange(40, 70), 0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waterMOvement");
}}

}


};gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDjumpAiObjects1Objects = Hashtable.newFrom({"jumpAi": gdjs.menuCode.GDjumpAiObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcharObjects1Objects = Hashtable.newFrom({"char": gdjs.menuCode.GDcharObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDplatformTestObjects1Objects = Hashtable.newFrom({"platformTest": gdjs.menuCode.GDplatformTestObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDjumpAiObjects1Objects = Hashtable.newFrom({"jumpAi": gdjs.menuCode.GDjumpAiObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDinactiveObjects1Objects = Hashtable.newFrom({"inactive": gdjs.menuCode.GDinactiveObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDskinsObjects1Objects = Hashtable.newFrom({"skins": gdjs.menuCode.GDskinsObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDPurpleButtonWithShadowObjects1Objects = Hashtable.newFrom({"PurpleButtonWithShadow": gdjs.menuCode.GDPurpleButtonWithShadowObjects1});
gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


gdjs.menuCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.menuCode.GDcharObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waterMOvement");
}{gdjs.evtTools.storage.writeStringInJSONFile("ok", "ok", "ok");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playerAFK");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "genLenght");
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.7, "", 0);
}{for(var i = 0, len = gdjs.menuCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcharObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.menuCode.GDcharObjects1.length !== 0 ? gdjs.menuCode.GDcharObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.menuCode.GDcharObjects1);
gdjs.copyArray(runtimeScene.getObjects("jumpAi"), gdjs.menuCode.GDjumpAiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDjumpAiObjects1Objects, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcharObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDcharObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcharObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "playerAFK") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.menuCode.GDcharObjects1);
{for(var i = 0, len = gdjs.menuCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcharObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.menuCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcharObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.2, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("ok", "ok");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "genLenght") < 5;
}
if (isConditionTrue_0) {
gdjs.menuCode.GDjumpAiObjects1.length = 0;

gdjs.menuCode.GDplatformTestObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDplatformTestObjects1Objects, 800 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), gdjs.randomInRange(425, 550), "");
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(575);
}{for(var i = 0, len = gdjs.menuCode.GDplatformTestObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDplatformTestObjects1[i].getBehavior("Resizable").setWidth(gdjs.randomInRange(500, 600));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDjumpAiObjects1Objects, (( gdjs.menuCode.GDplatformTestObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDplatformTestObjects1[0].getPointX("")) + 500, (( gdjs.menuCode.GDplatformTestObjects1.length === 0 ) ? 0 :gdjs.menuCode.GDplatformTestObjects1[0].getPointY("")) - 100, "");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.menuCode.GDcharObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDcharObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDcharObjects1[i].getY() > 1800 ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDcharObjects1[k] = gdjs.menuCode.GDcharObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDcharObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDcharObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcharObjects1[i].setPosition(120,480);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("ok", "ok");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.menuCode.GDcharObjects1);
{for(var i = 0, len = gdjs.menuCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcharObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inactive"), gdjs.menuCode.GDinactiveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDinactiveObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.menuCode.GDcharObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playerAFK");
}{for(var i = 0, len = gdjs.menuCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcharObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.7, "", 0);
}{for(var i = 0, len = gdjs.menuCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcharObjects1[i].setPosition(120,480);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.menuCode.GDcharObjects1.length !== 0 ? gdjs.menuCode.GDcharObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("skins"), gdjs.menuCode.GDskinsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDskinsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "skins", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.menuCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDPurpleButtonWithShadowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("skinObject", "playerSkin");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("skinObject", "playerSkin", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.menuCode.GDcharObjects1);
{for(var i = 0, len = gdjs.menuCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDcharObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDbgObjects1.length = 0;
gdjs.menuCode.GDbgObjects2.length = 0;
gdjs.menuCode.GDwaterObjects1.length = 0;
gdjs.menuCode.GDwaterObjects2.length = 0;
gdjs.menuCode.GDplatformTestObjects1.length = 0;
gdjs.menuCode.GDplatformTestObjects2.length = 0;
gdjs.menuCode.GDjumpAiObjects1.length = 0;
gdjs.menuCode.GDjumpAiObjects2.length = 0;
gdjs.menuCode.GDintroObjects1.length = 0;
gdjs.menuCode.GDintroObjects2.length = 0;
gdjs.menuCode.GDinactiveObjects1.length = 0;
gdjs.menuCode.GDinactiveObjects2.length = 0;
gdjs.menuCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.menuCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.menuCode.GDNewVideoObjects1.length = 0;
gdjs.menuCode.GDNewVideoObjects2.length = 0;
gdjs.menuCode.GDskinsObjects1.length = 0;
gdjs.menuCode.GDskinsObjects2.length = 0;
gdjs.menuCode.GDbetaTXT_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595Objects1.length = 0;
gdjs.menuCode.GDbetaTXT_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595_9595Objects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDcharObjects1.length = 0;
gdjs.menuCode.GDcharObjects2.length = 0;

gdjs.menuCode.eventsList1(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
