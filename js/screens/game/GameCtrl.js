import {makeGameType} from "../../data/gameConst";
import GetQuestions from "./QuestionCtrl";
import {Score} from "../../services/setScore/score";
import {gameTimeLimit, gameAnswerQty, gameMistakesMin} from "../../data/gameConst";

const statistics = [4, 5, 8, 11];

class GameCtrl {
  constructor() {
    this.gameType = makeGameType();
    this.gameTime = gameTimeLimit;
    this.questions = gameAnswerQty;
    this.answers = [];
    this.mistakes = gameMistakesMin;
    this.result = [];
    this.commonStatistics = statistics;
  }

  doNextQuestion() {
    this.questions--;
    return new GetQuestions(this);
  }

  doNextScreenType() {
    this.gameType = makeGameType();
  }


  get doUserResult() {
    const score = new Score(this);
    return score.displayScore();
  }


}

export default () => {
  return new GameCtrl();
};
