let wordBox = document.getElementsByClassName("org-word");
let startBtn = document.getElementById("startBtn");
let timer = document.getElementById("timer");
let timerStarted = false;
let stop = true;

function startGame() {
    startBtn.classList.toggle("visible");
    wordBox.classList.toggle("visible");
    setInterval(setTimeDiv(), 1000); //every second run setTimeDiv()

    for (let j = 1; j < 5; j++) {
        let vards = sajauc(randomVards(4));
        for (let i = 1; i < 5; i++) {
            document.getElementById("four-" + j + "-" + i).innerHTML = vards[i - 1];
        }
    }
    for (let j = 1; j < 5; j++) {
        let vards = sajauc(randomVards(5));
        for (let i = 1; i < 6; i++) {
            document.getElementById("five-" + j + "-" + i).innerHTML = vards[i - 1];
        }
    }
    for (let j = 1; j < 5; j++) {
        let vards = sajauc(randomVards(6));
        for (let i = 1; i < 7; i++) {
            document.getElementById("six-" + j + "-" + i).innerHTML = vards[i - 1];
        }
    }

}

function setTimeDiv() {
    if (timerStarted) {
        if (timeLeft == 0) {
            stop = true;
            return;
        }
        timeLeft -= 1;
        timer.innerHTML = timeLeft + "s";
    }else{
        timerStarted = true;
        let timeLeft = 90;
    }
}

var words4 = ["code", "name", "cage", "dead", "fire", "iron", "deck", "beam", "frog", "jury"];
var words5 = ["doubt", "wheat", "shout", "watch", "total", "tribe", "fence", "exile", "smell", "pause"];
var words6 = ["ensure", "random", "devote", "remind", "closed", "prayer", "carbon", "relief", "dragon", "attack"];
function randomVards(length) {
    if (length === 4) {
        let i = Math.floor(Math.random() * 10);
        return words4[i];
    }
    if (length === 5) {
        let i = Math.floor(Math.random() * 10);
        return words5[i];
    }
    let i = Math.floor(Math.random() * 10);
    return words6[i];
}
function sajauc(vards) {
    let randomPairs = [];
    for (let i = 0; i < vards.length; i++) {
        let nr = Math.floor(Math.random() * 100);
        randomPairs[i] = {"index": i, "random": nr};
    }
    randomPairs.sort(function (a, b) {
        return a.random - b.random;
    });
    let sajaukts = "";
    for (let i = 0; i < vards.length; i++) {
        sajaukts += vards.charAt(randomPairs[i]["index"]);
    }
    return sajaukts;
}