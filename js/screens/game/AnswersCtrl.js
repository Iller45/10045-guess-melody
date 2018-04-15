import {answerTimeLimit} from "../../data/gameConst";

class AnswerCtrl {
  constructor(userAnswer, answer, gameType) {
    this.time = answerTimeLimit;
    if (gameType === `artist`) {
      this.win = (userAnswer === answer.name);
    }

    if (gameType === `genre`) {
      this.win = userAnswer.every((it) => it.value === answer);
    }
  }
}
export {AnswerCtrl};
