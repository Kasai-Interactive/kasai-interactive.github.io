gdjs.plsREADCode = {};
gdjs.plsREADCode.GDNewTextObjects1= [];
gdjs.plsREADCode.GDNewTextObjects2= [];
gdjs.plsREADCode.GDNewText2Objects1= [];
gdjs.plsREADCode.GDNewText2Objects2= [];
gdjs.plsREADCode.GDNewText3Objects1= [];
gdjs.plsREADCode.GDNewText3Objects2= [];
gdjs.plsREADCode.GDcharObjects1= [];
gdjs.plsREADCode.GDcharObjects2= [];


gdjs.plsREADCode.asyncCallback10462052 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}{gdjs.deviceVibration.stopVibration();
}}
gdjs.plsREADCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.plsREADCode.asyncCallback10462052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.plsREADCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.deviceVibration.startVibrationPattern("100");
}
{ //Subevents
gdjs.plsREADCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.plsREADCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.plsREADCode.GDNewTextObjects1.length = 0;
gdjs.plsREADCode.GDNewTextObjects2.length = 0;
gdjs.plsREADCode.GDNewText2Objects1.length = 0;
gdjs.plsREADCode.GDNewText2Objects2.length = 0;
gdjs.plsREADCode.GDNewText3Objects1.length = 0;
gdjs.plsREADCode.GDNewText3Objects2.length = 0;
gdjs.plsREADCode.GDcharObjects1.length = 0;
gdjs.plsREADCode.GDcharObjects2.length = 0;

gdjs.plsREADCode.eventsList1(runtimeScene);

return;

}

gdjs['plsREADCode'] = gdjs.plsREADCode;
