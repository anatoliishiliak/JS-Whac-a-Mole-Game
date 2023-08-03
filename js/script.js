const squares = document.querySelectorAll(".square");

const mole = document.querySelector(".mole");

const timeLeft = document.querySelector("#time-left");

const score = document.querySelector("#score");

const button = document.querySelector(".start-button");

let timerId = null;
let currentTime = 60;
let result = 0;
let hitPosition;
let countDownTimerId;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 10)];

  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 400);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(timerId);
    clearInterval(countDownTimerId);
    alert("Game Over, you score is " + result);
    button.disabled = false;
    timeLeft.textContent = 60;
    score.textContent = 0;
    currentTime = 60;
  }
}
button.addEventListener("click", () => {
  moveMole();
  randomSquare();
  countDown();
  countDownTimerId = setInterval(countDown, 1000);
  button.disabled = true;
});
