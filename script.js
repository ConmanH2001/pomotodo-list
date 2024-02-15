//pmodoro timer section
const timer = document.getElementById("timer");
const shortBreakCounter = document.getElementById("short-break-counter");
const mediumBreakCounter = document.getElementById("medium-break-counter");
const longBreakCounter = document.getElementById("long-break-counter");

let work = 25;
let shortBreak = 5;
let mediumBreak = 15;
let longBreak = 30;

//timer buttons
const startButton = document.getElementById("start-timer");
const resetButton = document.getElementById("reset-timer");
const pausedButton = document.getElementById("pause-timer");

function startTimer(){
  
}

startButton.addEventListener("click", startTimer)

