import { translateTime, convertMs } from "./service/translateTime.js";

const refs = {
  scoreboard: document.querySelector(".scoreboard"),

  startTimer: document.querySelector("[data-start]"),
  stopTimer: document.querySelector("[data-stop]"),
};

refs.startTimer.addEventListener("click", onStartClick);
refs.stopTimer.addEventListener("click", onStopClick);

let intervalId = null;
let isActiveTimer = false;

const ostendTime = translateTime(0);
setScoreboard(ostendTime);

function onStartClick() {
  if (isActiveTimer) {
    return;
  }

  // refs.scoreboard.textContent = `00:00:00:00`;
  const ostendTime = translateTime(0);
  setScoreboard(ostendTime);

  const startTime = Date.now();
  isActiveTimer = true;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const difference = currentTime - startTime;

    const ostendTime = translateTime(difference);
    setScoreboard(ostendTime);
  }, 10);
}

function onStopClick() {
  clearInterval(intervalId);
  isActiveTimer = false;
}

function setScoreboard({ hours, mins, secs, msecs }) {
  refs.scoreboard.textContent = `${hours}:${mins}:${secs}:${msecs}`;
}
