let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
  timer = setInterval(updateTimer, 10);
  startButton.disabled = true;
}

function updateTimer() {
  milliseconds += 1;

  if (milliseconds === 100) {
    seconds++;
    milliseconds = 0;
  }

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    hours++;
    minutes = 0;
  }

  displayTime();
}

function stopTimer() {
  clearInterval(timer);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTime();
  startButton.disabled = false;
}

function displayTime() {
  hoursElement.textContent = padZero(hours);
  minutesElement.textContent = padZero(minutes);
  secondsElement.textContent = padZero(seconds);
  millisecondsElement.textContent = padZero(milliseconds, 2);
}

function padZero(num, size = 2) {
  return num.toString().padStart(size, '0');
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);