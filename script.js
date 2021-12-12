var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var point = 0;
var PpCV = 1;
var PpsV = 0;

var pointVar = point;
var pointSet = pointVar + "";

function pointVarSet() {
    if (point >= 1000000000000) {
        pointVar = point / 1000000000000;
        pointSet = (pointVar+"").substring(0,5) + "T";
    } else if (point >= 1000000000) {
        pointVar = point / 1000000000;
        pointSet = (pointVar+"").substring(0,5) + "B";
    } else if (point >= 1000000) {
        pointVar = point / 1000000;
        pointSet = (pointVar+"").substring(0,5) + "M";
    } else if (point >= 1000) {
        pointVar = point / 1000;
        pointSet = (pointVar+"").substring(0,5) + "K";
    } else {
        pointVar = point;
        pointSet = (pointVar+"").substring(0,3);
    }
}

function addPoint() {
    point = point + PpCV;
    document.getElementById("point").innerHTML = pointSet;
}
function Update() {
    // Point per Seconds
    point = point + PpsV;
    document.getElementById("point").innerHTML = pointSet;
    setTimeout(pointVarSet, 1000);
    setTimeout(Update, 1000);
}
function addPpC() {
    if (point >= 15) {
        PpCV = PpCV + 1;
        point = point - 15;
    }
}
function addPpS() {
    if (point >= 20) {
        PpsV = PpsV + 1;
        point = point - 20;
    }
}

// Dark and Light mode
function DLmT() {
    var pointC = document.getElementById("pointC");
    var UB1 = document.getElementById("UB1");
    var UB2 = document.getElementById("UB2");
    var clicker = document.getElementById("clicker");
    // D&L Toggle
    pointC.classList.toggle("Dark");
    UB1.classList.toggle("Dark");
    UB2.classList.toggle("Dark");
    clicker.classList.toggle("btnDark");
    pointC.classList.toggle("Light");
    UB1.classList.toggle("Light");
    UB2.classList.toggle("Light");
    clicker.classList.toggle("btnLight");
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



document.getElementById("point").innerHTML = point;
