import {
  ANSWER_TIME_LIMIT,
  MIN_ANSWER_QTY,
  MIN_NOTES,
  SCORE_FOR_FAST_ANSWER,
  SCORE_FOR_WRONG_ANSWER,
  TIME_LIMIT
} from "../testsConst";

const makeException = (text) => {
  throw new Error(text);
};

class Score {
  constructor() {
    this.score = null;
  }

  setScore(answers, notes) {
    let finishPhrase = ``;
    if (typeof notes !== `number`) {
      makeException(`Notes must be a number`);
    }
    if (notes < MIN_NOTES) {
      finishPhrase = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
      return finishPhrase;
    }
    if (!Array.isArray(answers)) {
      makeException(`Answers must be array`);
    }
    if (answers.length < MIN_ANSWER_QTY) {
      return -1;
    }
    answers.forEach((item) => {
      if (item.win && item.time < ANSWER_TIME_LIMIT) {
        this.score = this.score + SCORE_FOR_FAST_ANSWER;
        return this.score;
      } else if (item.win && item.time >= ANSWER_TIME_LIMIT) {
        return ++this.score;
      } else if (!item.win) {
        this.score = this.score + SCORE_FOR_WRONG_ANSWER;
        return this.score;
      }
      return this.score;
    });
    return this.score;
  }

  dysplayScore(resultObject, othersAnswers, time, notes) {
    let finishPhrase = ``;
    if (typeof notes !== `number`) {
      makeException(`Notes must be a number`);
    }
    if (time > TIME_LIMIT) {
      finishPhrase = `Время вышло! Вы не успели отгадать все мелодии`;
      return finishPhrase;
    }
    if (notes < MIN_NOTES) {
      finishPhrase = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
      return finishPhrase;
    }
    const compareLikeNumber = (a, b) => {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    };
    othersAnswers.push(resultObject.score);
    const userScore = resultObject.score;
    const leaderBoard = othersAnswers.sort(compareLikeNumber);
    const userPosition = leaderBoard.indexOf(userScore) + 1;
    const userProcent = (((othersAnswers.length) - userPosition) / othersAnswers.length) * 100;
    finishPhrase = `Вы заняли ${userPosition}-ое место из ${ othersAnswers.length} игроков. Это лучше, чем у ${userProcent}% игроков`;
    return finishPhrase;
  }
}

export {Score};
