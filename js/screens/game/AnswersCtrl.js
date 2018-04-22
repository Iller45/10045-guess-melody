class AnswerCtrl {
  constructor(userAnswer, question) {
    this.time = question.answerTime;
    if (question.gameType === `artist`) {
      this.win = (userAnswer === question.name);
    }
    if (question.gameType === `genre`) {
      this.win = userAnswer.every((it) => it.value === question.answer);
    }
  }
}

export {AnswerCtrl};
