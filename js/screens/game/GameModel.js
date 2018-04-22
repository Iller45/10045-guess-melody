import {makeGameType} from "../../data/gameConst";
import GetQuestions from "./QuestionCtrl";
import {Score} from "../../services/setScore/score";
import {gameTimeLimit, gameAnswerQty, gameMistakesMin, gameStartTime, commonStatistics} from "../../data/gameConst";


const INITIAL_STATE = {
  startTime: gameStartTime,
  timer: gameTimeLimit,
  questions: gameAnswerQty,
  answers: [],
  mistakes: gameMistakesMin,
  results: commonStatistics
};

class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  restart() {
    this._state = Object.assign({}, INITIAL_STATE);
  }

  isQuestionsRemained() {
    return this.state.questions > 0;
  }

  doQuestion() {
    if (this.state.questions === 0) {
      return false;
    }
    this._state.questions--;
    return new GetQuestions(this.state);
  }

  saveAnswer(answer) {
    this._state.answers.push(answer);
  }

  tick() {
    if (this._state.timer === 0) {
      return false;
    }
    return this._state.timer--;
  }

  get timer() {
    return this._state.timer;
  }

  get mistakes() {
    return this._state.mistakes;
  }

  onMistake() {
    this._state.mistakes++;
  }

  doNextScreenType() {
    this.gameType = makeGameType();
  }

  get doUserResult() {
    const score = new Score(this);
    return score.displayScore();
  }
}

export {GameModel};
