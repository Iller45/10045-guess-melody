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
    if (notes < 1) {
      finishPhrase = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
      return finishPhrase;
    }
    if (!Array.isArray(answers)) {
      makeException(`Answers must be array`);
    }
    if (answers.length < 10) {
      return -1;
    }
    answers.forEach((item) => {
      if (item.win && item.time < 30) {
        this.score = this.score + 2;
        return this.score;
      } else if (item.win && item.time >= 30) {
        return ++this.score;
      } else if (!item.win) {
        this.score = this.score - 2;
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
    if (time > 300) {
      finishPhrase = `Время вышло! Вы не успели отгадать все мелодии`;
      return finishPhrase;
    }
    if (notes < 1) {
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
      return void 0;
    };
    const userScore = resultObject.score;
    othersAnswers.push(userScore);
    const leadersQty = othersAnswers.length;
    const leaderBoard = othersAnswers.sort(compareLikeNumber);
    const userPosition = leaderBoard.indexOf(userScore) + 1;
    const userProcent = (((leadersQty) - userPosition) / leadersQty) * 100;

    finishPhrase = `Вы заняли ${userPosition}-ое место из ${ leadersQty} игроков. Это лучше, чем у ${userProcent}% игроков`;


    return finishPhrase;
  }
}

export {Score};
