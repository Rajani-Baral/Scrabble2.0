let wordBox = document.getElementsByClassName("org-word");
let startBtn = document.getElementById("startBtn");
let timer = document.getElementById("timer");
function startGame(){
    startBtn.classList.toggle("visible");
    wordBox.classList.toggle("visible");
    setTimeout(setTimeDiv(), 1000); //every second run setTimeDiv()
}

function setTimeDiv(){
    timer.innerHTML="newtext";
}