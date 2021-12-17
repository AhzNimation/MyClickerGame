var date = new Date();
var year = date.getFullYear();

var point = 0;
var PpCV = 1;
var PpsV = 0;

var pointVar = point;
var pointSet = pointVar + "";

var PpCVar = PpCV;
var PpCSet = PpCVar + "";

var PpSVar = PpsV;
var PpSSet = PpsV + "";

var PpCUpgradeCost = 15;
var PpSUpgradeCost = 20;

var PpCUpgradeCostVar = PpCUpgradeCost;
var PpSUpgradeCostVar = PpSUpgradeCost;

var PpCUpgradeCostSet = PpCUpgradeCostVar + "";
var PpSUpgradeCostSet = PpSUpgradeCostVar + "";

const mClick = new Audio();
mClick.src = "Click.mp3";

var gameC = document.getElementById("game");
var winScreen = document.getElementById("win");

var reedemVal = document.getElementById("reedemValue").value;

var reedemCode1 = "AhzTheBest"
var reedemCode2 = "20kPoints"
var reedemCode3 = "IWantToBeRich"
var rC1Used = false;
var rC2Used = false;
var rC3Used = false;

function VarSet(param, paramVar, paramSet, lenght) {
    if (param >= 1000000000000000000000000) {
        paramVar = param / 1000000000000000000000000;
        paramSet = (paramVar + "").substring(0, lenght) + "Sp";
    } else if (param >= 1000000000000000000000) {
        paramVar = param / 1000000000000000000000;
        paramSet = (paramVar + "").substring(0, lenght) + "Sk";
    } else if (param >= 1000000000000000000) {
        paramVar = param / 1000000000000000000;
        paramSet = (paramVar + "").substring(0, lenght) + "Kt";
    } else if (param >= 1000000000000000) {
        paramVar = param / 1000000000000000;
        paramSet = (paramVar + "").substring(0, lenght) + "Kd";
    } else if (param >= 1000000000000) {
        paramVar = param / 1000000000000;
        paramSet = (paramVar + "").substring(0, lenght) + "T";
    } else if (param >= 1000000000) {
        paramVar = param / 1000000000;
        paramSet = (paramVar + "").substring(0, lenght) + "B";
    } else if (param >= 1000000) {
        paramVar = param / 1000000;
        paramSet = (paramVar + "").substring(0, lenght) + "M";
    } else if (param >= 1000) {
        paramVar = param / 1000;
        paramSet = (paramVar + "").substring(0, lenght) + "K";
    } else {
        paramVar = param;
        paramSet = (paramVar + "").substring(0, lenght);
    }
    return paramSet;
}
function CallVarSet() {
    pointSet = VarSet(point, pointVar, pointSet, 5);
    PpCUpgradeCostSet = VarSet(PpCUpgradeCost, PpCUpgradeCostVar, PpCUpgradeCostSet, 5);
    PpSUpgradeCostSet = VarSet(PpSUpgradeCost, PpSUpgradeCostVar, PpSUpgradeCostSet, 5);
    PpCSet = VarSet(PpCV, PpCVar, PpCSet, 5);
    PpSSet = VarSet(PpsV, PpSVar, PpSSet, 3);
}
function winS() {
    if (point > 10000000000000000000000000) {
        gameC.classList.add("hide");
        winScreen.classList.remove("hide");
        point = 0;
        PpCV = 1;
        ppsv = 0;
    }
}
function reedem() {
    var hasbeenused = document.getElementById("hasBeenUsed");
    var invalid = document.getElementById("codeInvalid");
    var playerRich = document.getElementById("Rich");
    mClick.play();
    if (reedemVal == reedemCode1 && rC1Used == false) {
        rC1Used = true;
        PpCV = PpCV * 10;
        PpsV = PpsV * 10;
        point = point * 10;
        hasbeenused.classList.add("hide");
        invalid.classList.add("hide");
        playerRich.classList.add("hide");
    } else if (reedemVal == reedemCode2 && rC2Used == false) {
        rC2Used = true;
        point = point + 20000;
        hasbeenused.classList.add("hide");
        invalid.classList.add("hide");
        playerRich.classList.add("hide");
    } else if (reedemVal == reedemCode3 && rC3Used == false && point <= 500000) {
        rC3Used = true;
        point = point + 1000000;
        hasbeenused.classList.add("hide");
        invalid.classList.add("hide");
        playerRich.classList.add("hide");
    } else if (reedemVal == reedemCode3 && rC3Used == false && point >= 500001) {
        hasbeenused.classList.add("hide");
        invalid.classList.add("hide");
        playerRich.classList.remove("hide");
    } else if ((reedemVal == reedemCode1 && rC1Used == true) || (reedemVal == reedemCode2 && rC2Used == true) || (reedemVal == reedemCode3 && rC3Used == true)) {
        hasbeenused.classList.remove("hide");
        invalid.classList.add("hide");
        playerRich.classList.add("hide");
    } else {
        hasbeenused.classList.add("hide");
        invalid.classList.remove("hide");
        playerRich.classList.add("hide");
        return;
    }
}
function addPoint() {
    mClick.play();
    point = point + PpCV;
    document.getElementById("point").innerHTML = pointSet;
}
function Update() {
    year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
    // Point per Seconds
    point = point + PpsV;
    reedemVal = document.getElementById("reedemValue").value;
    document.getElementById("point").innerHTML = pointSet;
    document.getElementById("PpCU").innerHTML = PpCUpgradeCostSet;
    document.getElementById("PpSU").innerHTML = PpSUpgradeCostSet;
    document.getElementById("PpCVDiv").innerHTML = PpCSet + " " + "/ Click";
    document.getElementById("PpSVDiv").innerHTML = PpSSet + " " + "/ Second";
    setTimeout(CallVarSet, 1000);
    setTimeout(winS, 1000);
    setTimeout(Update, 1000);
}
function addPpC() {
    mClick.play();
    if (point >= PpCUpgradeCost) {
        PpCV = PpCV + (PpCUpgradeCost / 15);
        point = point - PpCUpgradeCost;
    }
}
function addPpS() {
    mClick.play();
    if (point >= PpSUpgradeCost) {
        PpsV = PpsV + (PpSUpgradeCost / 20);
        point = point - PpSUpgradeCost;
    }
}
// Dark and Light mode
function DLmT() {
    mClick.play();
    var pointC = document.getElementById("pointC");
    var UB1 = document.getElementById("UB1");
    var UB2 = document.getElementById("UB2");
    var clicker = document.getElementById("clicker");
    var PMBtn1 = document.getElementById("PMB1");
    var PMBtn2 = document.getElementById("PMB2");
    var PMBtn3 = document.getElementById("PMB3");
    var PMBtn4 = document.getElementById("PMB4");
    var RCD = document.getElementById("ReedemDiv");
    var Footer = document.getElementById("footer");
    var VarValue = document.getElementById("VarValue");
    // D&L Toggle
    pointC.classList.toggle("Dark");
    UB1.classList.toggle("Dark");
    UB2.classList.toggle("Dark");
    clicker.classList.toggle("btnDark");
    pointC.classList.toggle("Light");
    UB1.classList.toggle("Light");
    UB2.classList.toggle("Light");
    clicker.classList.toggle("btnLight");
    RCD.classList.toggle("ReedemD");
    RCD.classList.toggle("ReedemL");
    Footer.classList.toggle("fdark");
    VarValue.classList.toggle("VVDark");
    // PMBTN
    PMBtn1.classList.toggle("Dark");
    PMBtn1.classList.toggle("Light");
    PMBtn2.classList.toggle("Dark");
    PMBtn2.classList.toggle("Light");
    PMBtn3.classList.toggle("Dark");
    PMBtn3.classList.toggle("Light");
    PMBtn4.classList.toggle("Dark");
    PMBtn4.classList.toggle("Light");
    // body
    var body = document.getElementById("back");
    body.classList.toggle("bodyD");
    body.classList.toggle("bodyL");
    // the swap button
    var moon = document.getElementById("moon");
    var sun = document.getElementById("sun");;
    moon.classList.toggle("hide");
    sun.classList.toggle("hide");
}
function PpCP() {
    mClick.play();
    if (PpCUpgradeCost < 200000000000000000000000) {
        PpCUpgradeCost = PpCUpgradeCost * 10;
    }
}
function PpCM() {
    mClick.play();
    if (PpCUpgradeCost > 15) {
        PpCUpgradeCost = PpCUpgradeCost / 10;
    }
}
function PpSP() {
    mClick.play();
    if (PpSUpgradeCost < 300000000000000000000000) {
        PpSUpgradeCost = PpSUpgradeCost * 10;
    }
}
function PpSM() {
    mClick.play();
    if (PpSUpgradeCost > 15) {
        PpSUpgradeCost = PpSUpgradeCost / 10;
    }
}
function restart() {
    mClick.play();
    point = 0;
    PpCV = 1;
    PpsV = 0;
    gameC.classList.remove("hide");
    winScreen.classList.add("hide");
}
document.getElementById("point").innerHTML = pointSet;