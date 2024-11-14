// Variables for buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero values
let leadingSeconds = "00";
let leadingMinutes = "00";
let leadingHours = "00";

// Variables for set interval and timer status
let timerInterval = null;
let timerStatus = "stopped";

// Stopwatch function
function stopWatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    // Add leading zeros if necessary
    leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
    leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
    leadingHours = hours < 10 ? "0" + hours : hours;

    // Update the timer display
    document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Start/Stop button functionality
startStopBtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timerInterval = setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "started";
    } else {
        clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stopped";
    }
});

// Reset button functionality
resetBtn.addEventListener('click', function () {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Reset display
    document.getElementById('timer').innerHTML = "00:00:00";
    timerStatus = "stopped";
    document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
});


