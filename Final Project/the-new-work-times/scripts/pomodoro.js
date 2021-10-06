//Values for timer()
let countdown;
let variable;

//Element from the DOM
const display = document.querySelector('#time');
const allbtns = document.querySelectorAll('.set');
const start = document.querySelector('#start');
const pomodoro = document.querySelector('#pomodoro');
const shortB = document.querySelector('#short-b');
const longB = document.querySelector('#long-b');
const body = document.querySelector('body');
const settings = document.querySelector('#btn-modal');
const modal = document.querySelector('.modal-content');
const timerPomo = document.querySelector('#pomo');
const timerShort = document.querySelector('#sho-b');
const timerLong = document.querySelector('#lon-b');
const toggleBtn = document.querySelector('#check');
const volSound = document.querySelector('#volume');
const audio = document.querySelector('#audio');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle("active");
    console.log(toggleBtn.value);
});

let timeSet = toSeconds(pomodoro.dataset.min);
window.onload = resetInCase;
timerPomo.oninput = changePom;
timerShort.oninput = changeShort;
timerLong.oninput = changeLong;

function resetInCase() {
    timerPomo.value = "25";
    timerShort.value = "5";
    timerLong.value = "10";
    toggleBtn.checked = false; 
}

function changePom(e) {
    pomodoro.dataset.min = timerPomo.value;

    if(pomodoro.classList.contains("active")) {
        clearInterval(countdown);
        variable = undefined;
        display.textContent = `${pomodoro.dataset.min}:00`;
        timeSet = toSeconds(pomodoro.dataset.min);
        start.textContent = "START";
    }
    console.log(typeof pomodoro.dataset.min);
}

function changeShort(e) {
    shortB.dataset.min = timerShort.value;

    if(shortB.classList.contains("active")) {
        clearInterval(countdown);
        variable = undefined;
        display.textContent = `${shortB.dataset.min}:00`;
        start.textContent = "START";
        timeSet = toSeconds(shortB.dataset.min);
    }
    console.log(typeof shortB.dataset.min);
}

function changeLong(e) {
    longB.dataset.min = timerLong.value;

    if(longB.classList.contains("active")) {
        clearInterval(countdown);
        variable = undefined;
        display.textContent = `${longB.dataset.min}:00`;
        start.textContent = "START";
        timeSet = toSeconds(longB.dataset.mim);
    }
    console.log(typeof longB.dataset.min);
}

document.querySelector('#btn-save').addEventListener("click", () => {
    if (checkIt()) {
        console.log(timerPomo.value , timerShort.value , timerLong.value)
    }
});

function checkIt() {
    if(
        timerPomo.value <= 0 ||
        timerPomo.value % 1 !== 0 ||
        timerShort.value % 1 !== 0 ||
        timerLong.value % 1 !== 0 || 
        timerShort.value <= 0 ||
        timerLong.value <= 0 
    ) {
        return false;
    } else {
        return true;
    }
}

function toSeconds(valueInMinutes) {
    return parseInt(valueInMinutes * 60);
}

let prova10 = callClosure();

start.addEventListener("click", prova10);

function callClosure() {
    return function aClosure(e) {
        console.log(e.target.color);

        if(e.target.textContent === "START" && variable === undefined) {
            e.target.textContent = "STOP";
            timer(timeSet);
            console.log(`case 1 ${variable}`);
        } else if(e.target.textContent === "STOP") {
            e.target.textContent = "START";
            clearInterval(countdown);
            let minutes = [];
            let contador = 0;
            while (display.textContent[contador] !== ":") {
                minutes.push(display.textContent[contador]);
                contador++;
            }
            let seconds = parseInt(
                display.textContent[display.textContent.length - 2] +
                display.textContent[display.textContent.length - 1]
            );
            minutes = parseInt(minutes.join(""));
            variable = minutes * 60 + seconds;
            console.log(`case 2 ${variable}`);
        } else if (e.target.textContent === "START" && variable !== undefined) {
            e.target.textContent = "STOP";
            clearInterval(countdown);
            timer(variable);
            console.log(`case 3 ${variable}`)
        }
    };
}

body.addEventListener("click", (e) => {
    if (e.target.id === "short-b") {
        clearInterval(countdown);
        variable = undefined;
        display.textContent =`${shortB.dataset.min}:00`;
        timeSet = toSeconds(shortB.dataset.min);
        console.log(timeSet);
        start.textContent = "START";
    } else if (e.target.id === "pomodoro") {
        clearInterval(countdown);
        variable = undefined;
        display.textContent =`${pomodoro.dataset.min}:00`;
        timeSet = toSeconds(pomodoro.dataset.min);
        console.log(timeSet);
        start.textContent = "START";
    } else if (e.target.id === "long-b") {
        clearInterval(countdown);
        variable = undefined;
        display.textContent = `${longB.dataset.min}:00`;
        timeSet = toSeconds(longB.dataset.min);
        console.log(timeSet);
        start.textContent = "START"
    }
});

allbtns.forEach((element) => {
    element.addEventListener("click", (e) => {
        checkActive();
        e.target.classList.add("active");
    });
});

function checkActive() {
    allbtns.forEach((element) => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
    });
}

function timer(seconds) {
    const current = Date.now();
    const target = current + seconds * 1000;
    displayTimeLeft(seconds);
    
    countdown = setInterval(() =>{
        const remainingTime = Math.round((target - Date.now()) / 1000);

        if (remainingTime < 0) {
            audio.volume = volSound.value;
            audio.play();
            clearInterval(countdown);

            if (pomodoro.classList.contains("active")) {
                variable = undefined;
                pomodoro.classList.remove("active");
                shortB.classList.add("active");

                display.textContent = `${shortB.dataset.min}:00`;
                timeSet = toSeconds(shortB.dataset.min);

                if (toggleBtn.classList.contains("active")) {
                    timer(timeSet);
                    start.textContent = "STOP";
                } else {
                    start.textContent = "START"
                }
            }else if (
                shortB.classList.contains("active") ||
                longB.classList.contains("active")
            ) {
                shortB.classList.remove("active");
                longB.classList.remove("active");
                pomodoro.classList.add("active");
                variable = undefined;

                display.textContent = `${pomodoro.datset.min}:00`;
                timeSet = toSeconds(pomodoro.datset.min);

                if (toggleBtn.classList.contains("active")) {
                    timer(timeSet);
                    start.textContent = "STOP";
                } else {
                    start.textContent = "START"
                }
            }
            return;
        }
        displayTimeLeft(remainingTime);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const segundos = seconds % 60;

    const value = `${minutes}:${segundos < 10 ? "0" : ""}${segundos}`;
    display.textContent = value;
    document.title = value;
}
