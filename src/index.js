import { traceBresenham } from "./modules/bresenham.mjs";
import {traceDDA} from "./modules/dda.mjs";

let res = document.getElementById("results");
let tabs = document.getElementById("table");
let tabs2 = document.getElementById("table-2");
const convert = document.getElementById("convert");
const convert2 = document.getElementById("convert-2");
const reset=document.getElementById("reset-form");
let procedure = document.getElementById("procedure");


const sel = (x) => {
    return document.getElementById(x);
}

reset.onclick = () => {
    procedure.style.display = "none";
    tabs.style.display = "none";
    tabs2.style.display = "none";
    clearInp();
}

const clearInp = () => {
    document.getElementById("init-expression-x-0").value = "";
    document.getElementById("init-expression-y-0").value = "";
    document.getElementById("init-expression-x-1").value = "";
    document.getElementById("init-expression-y-1").value = "";
}

convert.onclick = () => {
    tabs.style.display = "inline-block";
    procedure.style.display = "block";
    let numArr = getElements();
    let table = traceDDA(numArr[0],numArr[1],numArr[2],numArr[3],1);
    let disp, tabitems = "";
    for(let i=0;i<table.X.length;i++){
        tabitems += `<tr><td>${table.X[i]}</td><td>${table.Y[i]}</td><td>${table.X_plot[i]}</td><td>${table.Y_plot[i]}</td><td>${table.xy[i]}</td></tr>`;
    }
    sel("tabledata").innerHTML = tabitems;
}

convert2.onclick = () => {
    tabs2.style.display = "inline-block";
    procedure.style.display = "block";
    let numArr = getElements();
    let table = traceBresenham(numArr[0],numArr[1],numArr[2],numArr[3],1);
    let disp, tabitems = "";
    for(let i=0;i<table.X.length;i++){
        tabitems += `<tr><td>${table.X[i]}</td><td>${table.Y[i]}</td><td>${table.P[i]}</td><td>${table.XY[i]}</td></tr>`;
    }
    sel("tabledata2").innerHTML = tabitems;
}


const getElements = () => {
        let x0 = document.getElementById("init-expression-x-0").value;
        let y0 = document.getElementById("init-expression-y-0").value;
        let x1 = document.getElementById("init-expression-x-1").value;
        let y1 = document.getElementById("init-expression-y-1").value;
        return [x0,y0,x1,y1];
    }


const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.onclick = () => {
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
    }
    else{
        menu.classList.add("hidden");
    }
}

