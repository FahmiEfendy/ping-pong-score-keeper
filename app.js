const btnResetScore = document.querySelector("#btnResetScore");
const selectScoreLimit = document.querySelector("#selectScoreLimit");
const deuceText = document.querySelector("#deuce");

let isGameOver = false,
  scoreLimit = 3,
  targetScore;

const playerOne = {
  score: 0,
  displayScore: document.querySelector("#scorePlayerOne"),
  button: document.querySelector("#btnPlayerOne"),
};

const playerTwo = {
  score: 0,
  displayScore: document.querySelector("#scorePlayerTwo"),
  button: document.querySelector("#btnPlayerTwo"),
};

selectScoreLimit.addEventListener("change", function (e) {
  scoreLimit = parseInt(selectScoreLimit.value);
});

function scoreCount(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    while (scoreLimit - player.score == 1 && scoreLimit - opponent.score == 1) {
      if (targetScore >= 20) {
        targetScore === 20;
      } else {
        targetScore = scoreLimit + 1;
      }
      deuceText.innerText = `DEUCE!!! Score to win: ${
        scoreLimit + 1
      } Score limit: ${20}`;
      scoreLimit += 1;
    }
    if (player.score >= 20 || opponent.score >= 20) {
      gameOver(player, opponent);
    } else if (player.score === scoreLimit) {
      gameOver(player, opponent);
    }
    player.displayScore.innerText = player.score;
  }
}

playerOne.button.addEventListener("click", function (e) {
  scoreCount(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", function (e) {
  scoreCount(playerTwo, playerOne);
});

btnResetScore.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let player of [playerOne, playerTwo]) {
    player.score = 0;
    player.displayScore.textContent = 0;
    player.displayScore.classList.remove("has-text-success", "has-text-danger");
    player.button.disabled = false;
    deuceText.innerText = "";
    scoreLimit = 3;
    selectScoreLimit.selectedIndex = 0;
  }
}

function gameOver(player, opponent) {
  isGameOver = true;
  player.displayScore.classList.add("has-text-success");
  opponent.displayScore.classList.add("has-text-danger");
  player.button.disabled = true;
  opponent.button.disabled = true;
}
