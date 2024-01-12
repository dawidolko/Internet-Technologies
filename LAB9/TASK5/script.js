let startTime;
let updatedTime;
let savedTime = localStorage.getItem('savedTime') ? parseInt(localStorage.getItem('savedTime')) : 0;
let timerInterval;
let running = false;

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        if (savedTime) {
            startTime -= savedTime;
        }
        timerInterval = setInterval(updateDisplay, 1);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(timerInterval);
        savedTime = updatedTime - startTime;
        localStorage.setItem('savedTime', savedTime);
        running = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    savedTime = 0;
    localStorage.setItem('savedTime', savedTime);
    running = false;
    document.getElementById('stopwatchDisplay').innerHTML = '00:00:00';
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    let timeDifference = updatedTime - startTime;

    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('stopwatchDisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
}

// Event Listeners
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Initialize the display with saved time
if (savedTime) {
    let hours = Math.floor(savedTime / (1000 * 60 * 60));
    let minutes = Math.floor((savedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((savedTime % (1000 * 60)) / 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById('stopwatchDisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
}