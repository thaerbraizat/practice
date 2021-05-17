'use strict';

let arrOfDoing = [];
function Doing(thing, date) {
    this.thing = thing;
    this.date = date;
    arrOfDoing.push(this);
    saveToLs();
    
}

let unorderList = document.getElementById("unorderList");
let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let thing = event.target.thing.value;
    console.log(thing);
    let date = event.target.date.value;
    console.log(date);
    new Doing(thing, date);
    Doing.prototype.render();
    document.getElementById("form").reset();

}

Doing.prototype.render = function () {

    // let unorderList=document.getElementById("unorderList");
    unorderList.textContent = "";
    for (let i = 0; i < arrOfDoing.length; i++) {
        let list = document.createElement("li");
        unorderList.appendChild(list);
        list.textContent = arrOfDoing[i].thing;

        let list2 = document.createElement("li");
        unorderList.appendChild(list2);
        list2.textContent = arrOfDoing[i].date;


    }
}

function saveToLs() {
    let arrList = JSON.stringify(arrOfDoing);
    localStorage.setItem("saveData", arrList);
}

function getFromLs() {
    let data = localStorage.getItem("saveData");
    let show = JSON.parse(data);
    if (show) {
        for (let i = 0; i < show.length; i++) {
            let reInst = new Doing(show[i].thing,show[i].date);
            console.log(reInst);
            Doing.prototype.render();
        }
    }
}
getFromLs();

