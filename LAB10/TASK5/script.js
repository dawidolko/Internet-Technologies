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
        timerInterval = setInterval(updateDisplay, 1000); // Aktualizacja co sekundę
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
    localStorage.removeItem('savedTime');
    running = false;
    updateDisplay();
}

function updateDisplay() {
    if (running) {
        updatedTime = new Date().getTime();
    }
    let timeDifference = running ? updatedTime - startTime : savedTime;
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById('stopwatchDisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
}

// Event Listeners
window.onload = function() {
    document.getElementById('startButton').addEventListener('click', startTimer);
    document.getElementById('stopButton').addEventListener('click', stopTimer);
    document.getElementById('resetButton').addEventListener('click', resetTimer);
    updateDisplay(); // Inicjalizacja wyświetlacza
};

// Zapisanie czasu przed zamknięciem okna
window.onbeforeunload = function() {
    if (running) {
        stopTimer();
    }
};
