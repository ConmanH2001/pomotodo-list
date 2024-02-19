// Get references to HTML elements
const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Declare global variables
let timer; // To store interval ID
let seconds = 60; // Seconds in a minute
let minutes; // Minutes for each session
let working = true; // Flag to indicate if currently working

// Define session durations and display format
let times = [
  {
    name: "working",
    minutes: 24, // 25 minutes for work session
    display: "25:00"
  },
  {
    name: "break",
    minutes: 4, // 5 minutes for break session
    display: "05:00"
  },
]

// Function to update timer display
function timerFunction() {
  // Decrement seconds
  seconds--;

  // Handle decrementing minutes when seconds reach 0
  if (seconds < 0) {
    seconds = 59; // Reset seconds to 59
    minutes--; // Decrement minutes
  }

  // Handle transition between work and break sessions
  if (minutes < 0) {
    // Toggle working flag
    working = !working;
    // Reset minutes based on the session type
    minutes = times[working ? 0 : 1].minutes;
  }

  // Format minutes and seconds for display
  let displayMin = minutes < 10 ? "0" + minutes : minutes;
  let displaySec = seconds < 10 ? "0" + seconds : seconds;

  // Update time display
  timeDisplay.textContent = displayMin + ":" + displaySec;
}

// Event listener for start button
startButton.addEventListener("click", () => {
  if (!timer) {
    // If timer is not running, start the timer
    minutes = times[0].minutes; // Initialize minutes to initial work session duration
    timer = setInterval(timerFunction, 1000); // Call timerFunction every second
  }
});

// Event listener for stop button
stopButton.addEventListener("click", () => {
  // Stop the timer using clearInterval
  clearInterval(timer); // Clear the interval set by setInterval
  timer = null; // Reset timer to null
});

// Event listener for reset button
resetButton.addEventListener("click", () => {
  // Stop the timer and reset variables
  clearInterval(timer); // Clear the interval set by setInterval
  seconds = 60; // Reset seconds to 60
  minutes = times[0].minutes; // Reset minutes to initial work session duration
  timeDisplay.textContent = times[0].display; // Reset time display to initial value
});