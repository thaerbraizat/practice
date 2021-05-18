'use strict';

let arrOfDoing = [];
function Doing(note, date) {
    this.note = note;
    this.date = date;
    arrOfDoing.push(this);
    saveToLs();

}

let unorderList = document.getElementById("unorderList");
let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let note = event.target.note.value;
    let date = event.target.date.value;

    new Doing(note, date);
    Doing.prototype.render();
    document.getElementById("form").reset();

}

Doing.prototype.render = function () {


    unorderList.textContent = "";
    for (let i = 0; i < arrOfDoing.length; i++) {
        let list = document.createElement("li");
        unorderList.appendChild(list);
        list.textContent = arrOfDoing[i].note;

        let list2 = document.createElement("li");
        unorderList.appendChild(list2);
        list2.textContent = arrOfDoing[i].date;
        let btn = document.createElement("button")
        unorderList.appendChild(btn);
        btn.textContent = "delete";
        btn.setAttribute("id","btn");
        btn.addEventListener("click", deleteEvent);

        function deleteEvent(event) {
            event.preventDefault();
            console.log(list);
            console.log(list2);
            console.log(unorderList);

            unorderList.removeChild(list);
            unorderList.removeChild(list2);
            unorderList.removeChild(btn);
      
            // arrOfDoing[i].pop();
            console.log(arrOfDoing);

        }
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
            let reInst = new Doing(show[i].note, show[i].date);
            console.log(reInst);
            Doing.prototype.render();
        }
    }
}
getFromLs();

