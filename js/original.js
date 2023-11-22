let wordBox = document.getElementsByClassName("org-word");
let startBtn = document.getElementById("startBtn");
let timer = document.getElementById("timer");
function startGame(){
    startBtn.classList.toggle("visible");
    wordBox.classList.toggle("visible");
    setInterval(setTimeDiv(), 1000); //every second run setTimeDiv()
}

function setTimeDiv(){
    timer.innerHTML="newtext";
}

function getFullscreenElement(){
    return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscreenElement;
}

function toggleFullscreen(){
    console.log("Smth is happeneing");
    if (getFullscreenElement()) {
            document.exitFullscreen();
    }else {
        document.getElementById("playContainer").requestFullscreen().catch(console.log) ;
    }
}

document.getElementById("fullscreenBtn").addEventListener("click", () => {
    toggleFullscreen();
});
