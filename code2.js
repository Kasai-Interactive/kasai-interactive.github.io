gdjs.skinsCode = {};
gdjs.skinsCode.GDbgObjects1= [];
gdjs.skinsCode.GDbgObjects2= [];
gdjs.skinsCode.GDwaterObjects1= [];
gdjs.skinsCode.GDwaterObjects2= [];
gdjs.skinsCode.GDplatformTestObjects1= [];
gdjs.skinsCode.GDplatformTestObjects2= [];
gdjs.skinsCode.GDjumpAiObjects1= [];
gdjs.skinsCode.GDjumpAiObjects2= [];
gdjs.skinsCode.GDintroObjects1= [];
gdjs.skinsCode.GDintroObjects2= [];
gdjs.skinsCode.GDinactiveObjects1= [];
gdjs.skinsCode.GDinactiveObjects2= [];
gdjs.skinsCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.skinsCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.skinsCode.GDNewVideoObjects1= [];
gdjs.skinsCode.GDNewVideoObjects2= [];
gdjs.skinsCode.GDskinsObjects1= [];
gdjs.skinsCode.GDskinsObjects2= [];
gdjs.skinsCode.GDbackBTNObjects1= [];
gdjs.skinsCode.GDbackBTNObjects2= [];
gdjs.skinsCode.GDRussia_9595SkinObjects1= [];
gdjs.skinsCode.GDRussia_9595SkinObjects2= [];
gdjs.skinsCode.GDPoland_9595SkinObjects1= [];
gdjs.skinsCode.GDPoland_9595SkinObjects2= [];
gdjs.skinsCode.GDGermany_9595SkinObjects1= [];
gdjs.skinsCode.GDGermany_9595SkinObjects2= [];
gdjs.skinsCode.GDChina_9595skinObjects1= [];
gdjs.skinsCode.GDChina_9595skinObjects2= [];
gdjs.skinsCode.GDcharObjects1= [];
gdjs.skinsCode.GDcharObjects2= [];


gdjs.skinsCode.eventsList0 = function(runtimeScene) {

};gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDjumpAiObjects1Objects = Hashtable.newFrom({"jumpAi": gdjs.skinsCode.GDjumpAiObjects1});
gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDcharObjects1Objects = Hashtable.newFrom({"char": gdjs.skinsCode.GDcharObjects1});
gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDplatformTestObjects1Objects = Hashtable.newFrom({"platformTest": gdjs.skinsCode.GDplatformTestObjects1});
gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDjumpAiObjects1Objects = Hashtable.newFrom({"jumpAi": gdjs.skinsCode.GDjumpAiObjects1});
gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDinactiveObjects1Objects = Hashtable.newFrom({"inactive": gdjs.skinsCode.GDinactiveObjects1});
gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDRussia_95959595SkinObjects1Objects = Hashtable.newFrom({"Russia_Skin": gdjs.skinsCode.GDRussia_9595SkinObjects1});
gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDChina_95959595skinObjects1Objects = Hashtable.newFrom({"China_skin": gdjs.skinsCode.GDChina_9595skinObjects1});
gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDPoland_95959595SkinObjects1Objects = Hashtable.newFrom({"Poland_Skin": gdjs.skinsCode.GDPoland_9595SkinObjects1});
gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDGermany_95959595SkinObjects1Objects = Hashtable.newFrom({"Germany_Skin": gdjs.skinsCode.GDGermany_9595SkinObjects1});
gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDbackBTNObjects1Objects = Hashtable.newFrom({"backBTN": gdjs.skinsCode.GDbackBTNObjects1});
gdjs.skinsCode.eventsList1 = function(runtimeScene) {

{


gdjs.skinsCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "waterMOvement") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.skinsCode.GDwaterObjects1);
{for(var i = 0, len = gdjs.skinsCode.GDwaterObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDwaterObjects1[i].addForceTowardPosition(gdjs.randomInRange(-(20), -(100)), gdjs.randomInRange(1800, 1700), gdjs.randomInRange(40, 70), 0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waterMOvement");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.skinsCode.GDNewVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.skinsCode.GDcharObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waterMOvement");
}{gdjs.evtTools.storage.writeStringInJSONFile("ok", "ok", "ok");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playerAFK");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "genLenght");
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.7, "", 0);
}{for(var i = 0, len = gdjs.skinsCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDcharObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.skinsCode.GDcharObjects1.length !== 0 ? gdjs.skinsCode.GDcharObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.skinsCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.skinsCode.GDcharObjects1);
gdjs.copyArray(runtimeScene.getObjects("jumpAi"), gdjs.skinsCode.GDjumpAiObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDjumpAiObjects1Objects, gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDcharObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.skinsCode.GDcharObjects1 */
{for(var i = 0, len = gdjs.skinsCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDcharObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "playerAFK") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.skinsCode.GDcharObjects1);
{for(var i = 0, len = gdjs.skinsCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDcharObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.skinsCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDcharObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
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
gdjs.skinsCode.GDjumpAiObjects1.length = 0;

gdjs.skinsCode.GDplatformTestObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDplatformTestObjects1Objects, 800 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), gdjs.randomInRange(425, 550), "");
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(575);
}{for(var i = 0, len = gdjs.skinsCode.GDplatformTestObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDplatformTestObjects1[i].getBehavior("Resizable").setWidth(gdjs.randomInRange(500, 600));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDjumpAiObjects1Objects, (( gdjs.skinsCode.GDplatformTestObjects1.length === 0 ) ? 0 :gdjs.skinsCode.GDplatformTestObjects1[0].getPointX("")) + 500, (( gdjs.skinsCode.GDplatformTestObjects1.length === 0 ) ? 0 :gdjs.skinsCode.GDplatformTestObjects1[0].getPointY("")) - 100, "");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.skinsCode.GDcharObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.skinsCode.GDcharObjects1.length;i<l;++i) {
    if ( gdjs.skinsCode.GDcharObjects1[i].getY() > 1800 ) {
        isConditionTrue_0 = true;
        gdjs.skinsCode.GDcharObjects1[k] = gdjs.skinsCode.GDcharObjects1[i];
        ++k;
    }
}
gdjs.skinsCode.GDcharObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.skinsCode.GDcharObjects1 */
{for(var i = 0, len = gdjs.skinsCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDcharObjects1[i].setPosition(120,480);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("ok", "ok");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.skinsCode.GDcharObjects1);
{for(var i = 0, len = gdjs.skinsCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDcharObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inactive"), gdjs.skinsCode.GDinactiveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDinactiveObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.skinsCode.GDcharObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "playerAFK");
}{for(var i = 0, len = gdjs.skinsCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDcharObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.7, "", 0);
}{for(var i = 0, len = gdjs.skinsCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDcharObjects1[i].setPosition(120,480);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.skinsCode.GDcharObjects1.length !== 0 ? gdjs.skinsCode.GDcharObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Russia_Skin"), gdjs.skinsCode.GDRussia_9595SkinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDRussia_95959595SkinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("skinObject", "playerSkin", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("China_skin"), gdjs.skinsCode.GDChina_9595skinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDChina_95959595skinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{gdjs.evtTools.storage.writeNumberInJSONFile("skinObject", "playerSkin", 3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Poland_Skin"), gdjs.skinsCode.GDPoland_9595SkinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDPoland_95959595SkinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("skinObject", "playerSkin", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Germany_Skin"), gdjs.skinsCode.GDGermany_9595SkinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDGermany_95959595SkinObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.storage.writeNumberInJSONFile("skinObject", "playerSkin", 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backBTN"), gdjs.skinsCode.GDbackBTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.skinsCode.mapOfGDgdjs_9546skinsCode_9546GDbackBTNObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("char"), gdjs.skinsCode.GDcharObjects1);
{for(var i = 0, len = gdjs.skinsCode.GDcharObjects1.length ;i < len;++i) {
    gdjs.skinsCode.GDcharObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.skinsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.skinsCode.GDbgObjects1.length = 0;
gdjs.skinsCode.GDbgObjects2.length = 0;
gdjs.skinsCode.GDwaterObjects1.length = 0;
gdjs.skinsCode.GDwaterObjects2.length = 0;
gdjs.skinsCode.GDplatformTestObjects1.length = 0;
gdjs.skinsCode.GDplatformTestObjects2.length = 0;
gdjs.skinsCode.GDjumpAiObjects1.length = 0;
gdjs.skinsCode.GDjumpAiObjects2.length = 0;
gdjs.skinsCode.GDintroObjects1.length = 0;
gdjs.skinsCode.GDintroObjects2.length = 0;
gdjs.skinsCode.GDinactiveObjects1.length = 0;
gdjs.skinsCode.GDinactiveObjects2.length = 0;
gdjs.skinsCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.skinsCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.skinsCode.GDNewVideoObjects1.length = 0;
gdjs.skinsCode.GDNewVideoObjects2.length = 0;
gdjs.skinsCode.GDskinsObjects1.length = 0;
gdjs.skinsCode.GDskinsObjects2.length = 0;
gdjs.skinsCode.GDbackBTNObjects1.length = 0;
gdjs.skinsCode.GDbackBTNObjects2.length = 0;
gdjs.skinsCode.GDRussia_9595SkinObjects1.length = 0;
gdjs.skinsCode.GDRussia_9595SkinObjects2.length = 0;
gdjs.skinsCode.GDPoland_9595SkinObjects1.length = 0;
gdjs.skinsCode.GDPoland_9595SkinObjects2.length = 0;
gdjs.skinsCode.GDGermany_9595SkinObjects1.length = 0;
gdjs.skinsCode.GDGermany_9595SkinObjects2.length = 0;
gdjs.skinsCode.GDChina_9595skinObjects1.length = 0;
gdjs.skinsCode.GDChina_9595skinObjects2.length = 0;
gdjs.skinsCode.GDcharObjects1.length = 0;
gdjs.skinsCode.GDcharObjects2.length = 0;

gdjs.skinsCode.eventsList1(runtimeScene);

return;

}

gdjs['skinsCode'] = gdjs.skinsCode;
