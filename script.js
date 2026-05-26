let time = 25 * 60; // 25 minutes in seconds
let timer = null;

const display = document.getElementById("timer");

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) seconds = "0" + seconds;

  display.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timer !== null) return;

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timer);
      timer = null;
      alert("Time is up! ☕ Take a break");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  time = 25 * 60;
  updateDisplay();
}

updateDisplay();