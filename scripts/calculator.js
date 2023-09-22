const calcNumInput = document.querySelector(".calc-num-input");
const calcNotice = document.getElementById("calc-notice");

var btnResultAll = document.getElementById("btn-result-all");
var btnCancel = document.getElementById("btn-cancel");

const btnSqr = document.getElementById("btn-sqr");
const pSqr = document.getElementById("p-sqr");

const btnCube = document.getElementById("btn-cube");
const pCube = document.getElementById("p-cube");

const btnFactorial = document.getElementById("btn-factorial");
const pFactorial = document.getElementById("p-factorial");

const btnSqrRoot = document.getElementById("btn-sqr-root");
const pSqrRoot = document.getElementById("p-sqr-root");

const btnSqrCubicRoot = document.getElementById("btn-sqr-cubic-root");
const pSqrCubicRoot = document.getElementById("p-sqr-cubic-root");

const btnCircleLength = document.getElementById("btn-circle-length");
const pCircleLength = document.getElementById("p-circle-length");

const imgSqr = document.getElementById("img-sqr");
const imgCube = document.getElementById("img-cube");
const imgFactorial = document.getElementById("img-factorial");
const imgSqrRoot = document.getElementById("img-sqr-root");
const imgCubeRoot = document.getElementById("img-cube-root");
const imgCircleLength = document.getElementById("img-circle-length");

//dark img paths
let sqrImgPathDm = "//kotoffsky/web/ivan-qa/images/calc/dark-mode/sqr-512x512-dm.png";
let cubeImgPathDm = "//kotoffsky/web/ivan-qa/images/calc/dark-mode/cube-512x512-dm.png";
let factorialImgPathDm = "//kotoffsky/web/ivan-qa/images/calc/dark-mode/factorial-512x512-dm.png";
let sqrRootImgPathDm = "//kotoffsky/web/ivan-qa/images/calc/dark-mode/sqr-root-512x512-dm.png";
let cubeRootImgPathDm = "//kotoffsky/web/ivan-qa/images/calc/dark-mode/cube-root-512x512-dm.png";
let circleLngthImgPathDm = "//kotoffsky/web/ivan-qa/images/calc/dark-mode/circle-length-512x512-dm.png";

//light img paths
let sqrImgPath = "//kotoffsky/web/ivan-qa/images/calc/sqr-512x512.png";
let cubeImgPath = "//kotoffsky/web/ivan-qa/images/calc/cube-512x512.png";
let factorialImgPath = "//kotoffsky/web/ivan-qa/images/calc/factorial-512x512.png";
let sqrRootImgPath = "//kotoffsky/web/ivan-qa/images/calc/sqr-root-512x512.png";
let cubeRootImgPath = "//kotoffsky/web/ivan-qa/images/calc/cube-root-512x512.png";
let circleLngthImgPath = "//kotoffsky/web/ivan-qa/images/calc/circle-length-512x512.png";



//result functions


function squared(num) {
    return num * num;
};

function cubed(num) {
    return num * num * num;
};

function factorial(num) {
    var x = num;
    while (x > 1) {
        num *= x - 1;
        x--;
    }
    return num;
};

function squareRoot(num) {
    return (num ** (1 / 2));
};

function cubicRoot(num) {
    return (num ** (1 / 3));
};

function circleLength(num) {
    return (2 * 3.14 * num);
};

function refreshPage() {
    window.location.reload();
};

function resultCheck () {
    let num = calcNumInput.value;
    if (isNaN(num)) {
        calcNotice.textContent = "You need to enter a positive number!";
    }
    else if (num === "" || num === null || num === undefined || num < 0) {
        calcNotice.textContent = "Must be positive number from 1 to 10 characters";
    }
    else if (num.length > 10) {
        calcNotice.textContent = "Number is too large!";
    }
    else if (num.match(/^\s*$/)) {
        calcNotice.textContent = "The field can't be empty!";
    }
    else {
        calcNotice.textContent = "All calculated";
        resultAll();
    }
};

function DarkModeCheckAll () {
    document.querySelector(".dark-mode") ? imgSetDark() : imgSetLight();
};

function resultAll () {
    let num = calcNumInput.value;
    pSqr.textContent = "Squared " + num + " = " + squared(num) + ";";
    pCube.textContent = "Cubed  " + num + " = " + cubed(num) + "; ";
    pFactorial.textContent = "Factorial of " + num + " = " + factorial(num) + "; ";
    pSqrRoot.textContent = "Square root of " + num + " = " + squareRoot(num) + "; ";
    pSqrCubicRoot.textContent = "Cubic root of " + num + " = " + cubicRoot(num) + "; ";
    pCircleLength.textContent = "Circle length of " + num + " = " + circleLength(num) + ".";
    DarkModeCheckAll();
};

//darkmode checkers

function imgSetDark () {
    imgSqr.setAttribute('src', sqrImgPathDm);
    imgCube.setAttribute('src', cubeImgPathDm);
    imgFactorial.setAttribute('src', factorialImgPathDm);
    imgSqrRoot.setAttribute('src', sqrRootImgPathDm);
    imgCubeRoot.setAttribute('src', cubeRootImgPathDm);
    imgCircleLength.setAttribute('src', circleLngthImgPathDm);
};

function imgSetLight () {
    imgSqr.setAttribute('src', sqrImgPath);
    imgCube.setAttribute('src', cubeImgPath);
    imgFactorial.setAttribute('src', factorialImgPath);
    imgSqrRoot.setAttribute('src', sqrRootImgPath);
    imgCubeRoot.setAttribute('src', cubeRootImgPath);
    imgCircleLength.setAttribute('src', circleLngthImgPath);
};

function DarkModeCheckSqr () {
    if (document.querySelector(".dark-mode")) {
        imgSqr.setAttribute('src', sqrImgPathDm);
    }
    else {
        imgSqr.setAttribute('src', sqrImgPath);
    }
}

function DarkModeCheckCube () {
    if (document.querySelector(".dark-mode")) {
        imgCube.setAttribute('src', cubeImgPathDm);
    }
    else {
        imgCube.setAttribute('src', cubeImgPath);
    }
}

function DarkModeCheckFactorial () {
    if (document.querySelector(".dark-mode")) {
        imgFactorial.setAttribute('src', factorialImgPathDm);
    }
    else {
        imgFactorial.setAttribute('src', factorialImgPath);
    }
}

function DarkModeCheckSqrRoot () {
    if (document.querySelector(".dark-mode")) {
        imgSqrRoot.setAttribute('src', sqrRootImgPathDm);
    }
    else {
        imgSqrRoot.setAttribute('src', sqrRootImgPath);
    }
}

function DarkModeCheckSqrCubed () {
    if (document.querySelector(".dark-mode")) {
        imgCubeRoot.setAttribute('src', cubeRootImgPathDm);
    }
    else {
        imgCubeRoot.setAttribute('src', cubeRootImgPath);
    }
}

function DarkModeCheckCircleLength () {
    if (document.querySelector(".dark-mode")) {
        imgCircleLength.setAttribute('src', circleLngthImgPathDm);
    }
    else {
        imgCircleLength.setAttribute('src', circleLngthImgPath);
    }
}

//single calculating functions

function SquaredFnc () {
    let num = calcNumInput.value;
    if (isNaN(num)) {
        calcNotice.textContent = "You need to enter a positive number!";
    }
    else if (num === "" || num === null || num === undefined || num < 0) {
        calcNotice.textContent = "Must be positive number from 1 to 10 characters";
    }
    else if (num.length > 10) {
        calcNotice.textContent = "Number is too large!";
    }
    else if (num.match(/^\s*$/)) {
        calcNotice.textContent = "The field can't be empty!";
    }
    else {
        pSqr.textContent = "Squared " + num + " = " + squared(num) + ";";
        calcNotice.textContent = "Square calculated";
        DarkModeCheckSqr();
    }
}

function CubedFnc () {
    let num = calcNumInput.value;
    if (isNaN(num)) {
        calcNotice.textContent = "You need to enter a positive number!";
    }
    else if (num === "" || num === null || num === undefined || num < 0) {
        calcNotice.textContent = "Must be positive number from 1 to 10 characters";
    }
    else if (num.length > 10) {
        calcNotice.textContent = "Number is too large!";
    }
    else if (num.match(/^\s*$/)) {
        calcNotice.textContent = "The field can't be empty!";
    }
    else {
        pCube.textContent = "Cubed  " + num + " = " + cubed(num) + "; ";
        calcNotice.textContent = "Cube calculated";
        DarkModeCheckCube ();
    }
}

function FactorialFnc () {
    let num = calcNumInput.value;
    if (isNaN(num)) {
        calcNotice.textContent = "You need to enter a positive number!";
    }
    else if (num === "" || num === null || num === undefined || num < 0) {
        calcNotice.textContent = "Must be positive number from 1 to 10 characters";
    }
    else if (num.length > 10) {
        calcNotice.textContent = "Number is too large!";
    }
    else if (num.match(/^\s*$/)) {
        calcNotice.textContent = "The field can't be empty!";
    }
    else {
        pFactorial.textContent = "Factorial of " + num + " = " + factorial(num) + "; ";
        calcNotice.textContent = "Factorial calculated";
        DarkModeCheckFactorial ();
    }
}

function SqrRootFnc () {
    let num = calcNumInput.value;
    if (isNaN(num)) {
        calcNotice.textContent = "You need to enter a positive number!";
    }
    else if (num === "" || num === null || num === undefined || num < 0) {
        calcNotice.textContent = "Must be positive number from 1 to 10 characters";
    }
    else if (num.length > 10) {
        calcNotice.textContent = "Number is too large!";
    }
    else if (num.match(/^\s*$/)) {
        calcNotice.textContent = "The field can't be empty!";
    }
    else {
        pSqrRoot.textContent = "Square root of " + num + " = " + squareRoot(num) + "; ";
        calcNotice.textContent = "Square Root calculated";
        DarkModeCheckSqrRoot ();
    }
}

function CubicRootFnc () {
    let num = calcNumInput.value;
    if (isNaN(num)) {
        calcNotice.textContent = "You need to enter a positive number!";
    }
    else if (num === "" || num === null || num === undefined || num < 0) {
        calcNotice.textContent = "Must be positive number from 1 to 10 characters";
    }
    else if (num.length > 10) {
        calcNotice.textContent = "Number is too large!";
    }
    else if (num.match(/^\s*$/)) {
        calcNotice.textContent = "The field can't be empty!";
    }
    else {
        pSqrCubicRoot.textContent = "Cubic root of " + num + " = " + cubicRoot(num) + "; ";
        calcNotice.textContent = "Cubic Root calculated";
        DarkModeCheckSqrCubed ();
    }
}

function CircleLengthFnc () {
    let num = calcNumInput.value;
    if (isNaN(num)) {
        calcNotice.textContent = "You need to enter a positive number!";
    }
    else if (num === "" || num === null || num === undefined || num < 0) {
        calcNotice.textContent = "Must be positive number from 1 to 10 characters";
    }
    else if (num.length > 10) {
        calcNotice.textContent = "Number is too large!";
    }
    else if (num.match(/^\s*$/)) {
        calcNotice.textContent = "The field can't be empty!";
    }
    else {
        pCircleLength.textContent = "Circle length of " + num + " = " + circleLength(num) + ".";
        calcNotice.textContent = "Circle Length calculated";
        DarkModeCheckCircleLength ();
    }
}

btnResultAll.onclick = resultCheck;
btnCancel.onclick = refreshPage;

btnSqr.onclick = SquaredFnc;
btnCube.onclick = CubedFnc;
btnFactorial.onclick = FactorialFnc;
btnSqrRoot.onclick = SqrRootFnc;
btnSqrCubicRoot.onclick = CubicRootFnc;
btnCircleLength.onclick = CircleLengthFnc;

// square root = the value of power 1/2 of that number
// cubic root = the value of power 1/3 of that number