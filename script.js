gsap.to("h1", { opacity: 1, duration: 2, delay: 1 })
gsap.to(".container", { opacity: 1, duration: 2, delay: 1.6 })
gsap.to("button", { opacity: 1, rotation: 360, duration: 1, delay: 1.3 })

function christmasCountdown() {
  const christmasDate = new Date("December 25, 2023 00:00");
  const now = new Date();
  const diff = christmasDate - now;

  const msInSecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;

  const displayDay = Math.floor(diff / msInDay);
  document.querySelector(".days").textContent = displayDay;

  const displayHour = Math.floor((diff % msInDay) / msInHour);
  document.querySelector(".hours").textContent = displayHour;

  const displayMinute = Math.floor((diff % msInHour) / msInMinute);
  document.querySelector(".minutes").textContent = displayMinute;

  const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
  document.querySelector(".seconds").textContent = displaySecond;

  if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    merryChristmas();
  }
}
let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
  const heading = document.querySelector("h1");
  heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
  heading.classList.add("red");
}

const button = document.querySelector("#btn");
const audio = document.querySelector("#myAudio");

button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    button.innerHTML = `<i class="fa-solid fa-circle-pause fa-5x"></i>`;
  } else {
    audio.pause();
    button.innerHTML = `<i class="fa-solid fa-circle-play fa-5x"></i>`;
  }
});
