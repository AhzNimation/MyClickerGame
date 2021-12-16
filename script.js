var date = new Date();
var year = date.getFullYear();

var point = 0;
var PpCV = 1;
var PpsV = 0;

var pointVar = point;
var pointSet = pointVar + "";

var PpCUpgradeCost = 15;
var PpSUpgradeCost = 20;

var PpCUpgradeCostVar = PpCUpgradeCost;
var PpSUpgradeCostVar = PpSUpgradeCost;

var PpCUpgradeCostSet = PpCUpgradeCostVar + "";
var PpSUpgradeCostSet = PpSUpgradeCostVar + "";

var gameC = document.getElementById("game");
var winScreen = document.getElementById("win");

var reedemVal = document.getElementById("reedemValue").value;

var reedemCode1 = "AhzTheBest"
var reedemCode2 = "20kPoints"
var reedemCode3 = "IWantToBeRich"
var rC1Used = false;
var rC2Used = false;
var rC3Used = false;

function pointVarSet() {
    if (point >= 1000000000000000000000000) {
        pointVar = point / 1000000000000000000000000;
        pointSet = (pointVar + "").substring(0, 5) + "Sp";
    } else if (point >= 1000000000000000000000) {
        pointVar = point / 1000000000000000000000;
        pointSet = (pointVar + "").substring(0, 5) + "Sk";
    } else if (point >= 1000000000000000000) {
        pointVar = point / 1000000000000000000;
        pointSet = (pointVar + "").substring(0, 5) + "Kt";
    } else if (point >= 1000000000000000) {
        pointVar = point / 1000000000000000;
        pointSet = (pointVar + "").substring(0, 5) + "Kd";
        // Normal Var
    } else if (point >= 1000000000000) {
        pointVar = point / 1000000000000;
        pointSet = (pointVar + "").substring(0, 5) + "T";
    } else if (point >= 1000000000) {
        pointVar = point / 1000000000;
        pointSet = (pointVar + "").substring(0, 5) + "B";
    } else if (point >= 1000000) {
        pointVar = point / 1000000;
        pointSet = (pointVar + "").substring(0, 5) + "M";
    } else if (point >= 1000) {
        pointVar = point / 1000;
        pointSet = (pointVar + "").substring(0, 5) + "K";
    } else {
        pointVar = point;
        pointSet = (pointVar + "").substring(0, 3);
    }
}
function PpCUVarSet() {
    if (PpCUpgradeCost >= 1000000000000000000000000) {
        PpCUpgradeCostVar = PpCUpgradeCost / 1000000000000000000000000;
        PpCUpgradeCostSet = (PpCUpgradeCostVar + "").substring(0, 5) + "Sp";
    } else if (PpCUpgradeCost >= 1000000000000000000000) {
        PpCUpgradeCostVar = PpCUpgradeCost / 1000000000000000000000;
        PpCUpgradeCostSet = (PpCUpgradeCostVar + "").substring(0, 5) + "Sk";
    } else if (PpCUpgradeCost >= 1000000000000000000) {
        PpCUpgradeCostVar = PpCUpgradeCost / 1000000000000000000;
        PpCUpgradeCostSet = (PpCUpgradeCostVar + "").substring(0, 5) + "Kt";
    } else if (PpCUpgradeCost >= 1000000000000000) {
        PpCUpgradeCostVar = PpCUpgradeCost / 1000000000000000;
        PpCUpgradeCostSet = (PpCUpgradeCostVar + "").substring(0, 5) + "Kd";
        // Normal Var
    } else if (PpCUpgradeCost >= 1000000000000) {
        PpCUpgradeCostVar = PpCUpgradeCost / 1000000000000;
        PpCUpgradeCostSet = (PpCUpgradeCostVar + "") + "T";
    } else if (PpCUpgradeCost >= 1000000000) {
        PpCUpgradeCostVar = PpCUpgradeCost / 1000000000;
        PpCUpgradeCostSet = (PpCUpgradeCostVar + "").substring(0, 5) + "B";
    } else if (PpCUpgradeCost >= 1000000) {
        PpCUpgradeCostVar = PpCUpgradeCost / 1000000;
        PpCUpgradeCostSet = (PpCUpgradeCostVar + "").substring(0, 5) + "M";
    } else if (PpCUpgradeCost >= 1000) {
        PpCUpgradeCostVar = PpCUpgradeCost / 1000;
        PpCUpgradeCostSet = (PpCUpgradeCostVar + "").substring(0, 5) + "K";
    } else {
        PpCUpgradeCostVar = PpCUpgradeCost;
        PpCUpgradeCostSet = (PpCUpgradeCostVar + "").substring(0, 3);
    }
}
function PpSUVarSet() {
    if (PpSUpgradeCost >= 1000000000000000000000000) {
        PpSUpgradeCostVar = PpSUpgradeCost / 1000000000000000000000000;
        PpSUpgradeCostSet = (PpSUpgradeCostVar + "").substring(0, 5) + "Sp";
    } else if (PpSUpgradeCost >= 1000000000000000000000) {
        PpSUpgradeCostVar = PpSUpgradeCost / 1000000000000000000000;
        PpSUpgradeCostSet = (PpSUpgradeCostVar + "").substring(0, 5) + "Sk";
    } else if (PpSUpgradeCost >= 1000000000000000000) {
        PpSUpgradeCostVar = PpSUpgradeCost / 1000000000000000000;
        PpSUpgradeCostSet = (PpSUpgradeCostVar + "").substring(0, 5) + "Kt";
    } else if (PpSUpgradeCost >= 1000000000000000) {
        PpSUpgradeCostVar = PpSUpgradeCost / 1000000000000000;
        PpSUpgradeCostSet = (PpSUpgradeCostVar + "").substring(0, 5) + "Kd";
        // Normal Var
    } else if (PpSUpgradeCost >= 1000000000000) {
        PpSUpgradeCostVar = PpSUpgradeCost / 1000000000000;
        PpSUpgradeCostSet = (PpSUpgradeCostVar + "").substring(0, 5) + "T";
    } else if (PpSUpgradeCost >= 1000000000) {
        PpSUpgradeCostVar = PpSUpgradeCost / 1000000000;
        PpSUpgradeCostSet = (PpSUpgradeCostVar + "").substring(0, 5) + "B";
    } else if (PpSUpgradeCost >= 1000000) {
        PpSUpgradeCostVar = PpSUpgradeCost / 1000000;
        PpSUpgradeCostSet = (PpSUpgradeCostVar + "").substring(0, 5) + "M";
    } else if (PpSUpgradeCost >= 1000) {
        PpSUpgradeCostVar = PpSUpgradeCost / 1000;
        PpSUpgradeCostSet = (PpSUpgradeCostVar + "").substring(0, 5) + "K";
    } else {
        PpSUpgradeCostVar = PpSUpgradeCost;
        PpSUpgradeCostSet = (PpSUpgradeCostVar + "").substring(0, 3);
    }
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
    if (reedemVal == reedemCode1  && rC1Used == false){
        rC1Used = true;
        PpCV = PpCV * 10;
        PpsV = PpsV * 10;
        point = point * 10;
        hasbeenused.classList.add("hide");
        invalid.classList.add("hide");
    } else if (reedemVal == reedemCode2 && rC2Used == false) {
        rC2Used = true;
        point = point + 20000;
        hasbeenused.classList.add("hide");
        invalid.classList.add("hide");
    } else if (reedemVal == reedemCode3 && rC3Used == false) {
        rC3Used = true;
        point = point + 1000000;
        hasbeenused.classList.add("hide");
        invalid.classList.add("hide");
    } else if ((reedemVal == reedemCode1  && rC1Used == true) || (reedemVal == reedemCode2 && rC2Used == true) || (reedemVal == reedemCode3 && rC3Used == true)){
        hasbeenused.classList.remove("hide");
        invalid.classList.add("hide");
    } else {
        hasbeenused.classList.add("hide");
        invalid.classList.remove("hide");
        return;
    }
}
function addPoint() {
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
    setTimeout(winS, 1000);
    setTimeout(pointVarSet, 1000);
    setTimeout(PpCUVarSet, 1000);
    setTimeout(PpSUVarSet, 1000);
    setTimeout(Update, 1000);
}
function addPpC() {
    if (point >= PpCUpgradeCost) {
        PpCV = PpCV + (PpCUpgradeCost / 15);
        point = point - PpCUpgradeCost;
    }
}
function addPpS() {
    if (point >= PpSUpgradeCost) {
        PpsV = PpsV + (PpSUpgradeCost / 20);
        point = point - PpSUpgradeCost;
    }
}
// Dark and Light mode
function DLmT() {
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
    if (PpCUpgradeCost < 200000000000000000000000) {
        PpCUpgradeCost = PpCUpgradeCost * 10;
    }
}
function PpCM() {
    if (PpCUpgradeCost > 15) {
        PpCUpgradeCost = PpCUpgradeCost / 10;
    }
}
function PpSP() {
    if (PpSUpgradeCost < 300000000000000000000000) {
        PpSUpgradeCost = PpSUpgradeCost * 10;
    }
}
function PpSM() {
    if (PpSUpgradeCost > 15) {
        PpSUpgradeCost = PpSUpgradeCost / 10;
    }
}
function restart() {
    point = 0;
    PpCV = 1;
    PpsV = 0;
    gameC.classList.remove("hide");
    winScreen.classList.add("hide");
}
document.getElementById("point").innerHTML = pointSet;