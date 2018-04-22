import {
  SCORE_FOR_FAST_ANSWER,
  SCORE_FOR_WRONG_ANSWER,
  MAX_MISTAKES,
} from "../testsConst";
import {answerTimeLimit} from "../../data/gameConst";
import {setEndings} from "../endings";
import {formatTime} from "../formatTime";

const makeException = (text) => {
  throw new Error(text);
};
const sortArray = (array) => {
  let _array = array;
  const compareLikeNumber = (a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  };
  return _array.sort(compareLikeNumber);
};

class Score {
  constructor(gameData) {
    this.gameModel = gameData;
  }
  setScore() {
    let score = {
      'fast': 0,
      'normal': 0,
      'mistake': 0,
      'total': 0
    };
    if (typeof this.gameModel.mistakes !== `number`) {
      makeException(`Notes must be a number`);
    }
    if (!Array.isArray(this.gameModel.answers)) {
      makeException(`Answers must be array`);
    }
    this.gameModel.answers.forEach((item) => {
      if (item.win && item.time < answerTimeLimit) {
        score.fast = score.fast + SCORE_FOR_FAST_ANSWER;
      } else if (item.win && item.time >= answerTimeLimit) {
        ++score.normal;
      } else if (!item.win) {
        score.mistake = score.mistake + SCORE_FOR_WRONG_ANSWER;
      }
    });
    score.total = Object.keys(score).reduce((sum, key) => {
      return sum + parseFloat(score[key]);
    }, 0);
    return score;
  }

  displayScore() {
    if (this.gameModel.mistakes >= MAX_MISTAKES) {
      return `
         <h2 class="title">Какая жалость!</h2>
         <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;
    }
    if (this.gameModel.timer <= 0) {
      return `
      <h2 class="title">Увы и ах!</h2>
      <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;
    }

    this.gameModel.commonStatistics.push(this.setScore().total);
    const userScore = this.setScore();
    const leaderBoard = sortArray(this.gameModel.commonStatistics);
    const userPosition = leaderBoard.indexOf(userScore.total) + 1;
    const userProcent = (((this.gameModel.commonStatistics.length) - userPosition) / this.gameModel.commonStatistics.length) * 100;
    const time = formatTime(this.gameModel.gameTime);

    return `
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${time.minutes}&nbsp;${setEndings(time.minutes, [`минуту`, `минуты`, `минут`])} и ${time.seconds}&nbsp;${setEndings(time.seconds, [`секунду`, `секунды`, `секунд`])}
      <br>вы&nbsp;набрали ${userScore.total} ${setEndings(userScore.total, [`балл`, `балла`, `баллов`])} (${userScore.fast} быстрых),
      <br>совершив ${this.gameModel.mistakes} ${setEndings(this.gameModel.mistakes, [`ошибку`, `ошибки`, `ошибок`])}</div>
      <span class="main-comparison">Вы заняли ${userPosition}-ое место из ${leaderBoard.length} игроков. Это лучше, чем у ${userProcent}% игроков</span>
    </div>`;
  }
}

export {Score};
