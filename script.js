let myTimer = [];
let startingMinutes = 10;
let time = startingMinutes * 60;
const btn = document.querySelectorAll(".btn");
const twentyMinutesBtn = document.querySelector(".btn-20m");
const fifteenMinutesBtn = document.querySelector(".btn-15m");
const tenMinutesBtn = document.querySelector(".btn-10m");
const fiveMinutesBtn = document.querySelector(".btn-5m");

const stopTimer = document.querySelector(".stop-timer");
const countDownEl = document.getElementById("countdown");

function updateCountDown() {
  const minutes = Math.floor(time / 60);

  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minute = minutes < 10 ? "0" + minutes : minutes;
  countDownEl.innerHTML = `${minute} : ${seconds}`;
  time--;

  if (time <= 0) {
    stop();
  }
}

function hideBtn() {
  btn.forEach((b) => (b.style.display = "none"));
}

twentyMinutesBtn.addEventListener("click", () => {
  startingMinutes = 20;
  time = startingMinutes * 60;
  t = setInterval(updateCountDown, 1000);
  hideBtn();
  stopTimer.style.display = "inline";
});

fifteenMinutesBtn.addEventListener("click", () => {
  startingMinutes = 15;
  time = startingMinutes * 60;
  t = setInterval(updateCountDown, 1000);
  hideBtn();
  stopTimer.style.display = "inline";
});

tenMinutesBtn.addEventListener("click", () => {
  startingMinutes = 10;
  time = startingMinutes * 60;
  t = setInterval(updateCountDown, 1000);
  hideBtn();
  stopTimer.style.display = "inline";
});

fiveMinutesBtn.addEventListener("click", () => {
  startingMinutes = 5;
  time = startingMinutes * 60;
  t = setInterval(updateCountDown, 1000);
  hideBtn();
  stopTimer.style.display = "inline";
});

function stop() {
  clearInterval(t);
  btn.forEach((b) => (b.style.display = "inline"));
  stopTimer.style.display = "none";
  countDownEl.innerHTML = "00 : 00";
}

stopTimer.addEventListener("click", stop);
