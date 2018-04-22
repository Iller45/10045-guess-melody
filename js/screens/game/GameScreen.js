import {GameScreenContent} from "./GameScreenContent";
import Header from "../common/header";
import {Application} from "../../app";
import {gameMistakesMax, oneSecond} from "../../data/gameConst";

class GameScreen {
  constructor(gameModel) {
    this.model = gameModel;
    this.question = this.model.doQuestion();
    this.content = new GameScreenContent(this.question);
    this.header = new Header(this.model);
    this.gameScreenWrp = document.createElement(`section`);
    this.gameScreenWrp.className = `main main--level main--level-${this.question.type}`;
    this.gameScreenWrp.appendChild(this.header.element);
    this.gameScreenWrp.appendChild(this.content.element);
    this._interval = null;
  }

  get element() {
    return this.gameScreenWrp;
  }

  startGame() {
    this._interval = setInterval(() => {
      this.timer = this.model.tick();

      if (!this.timer) {
        this.endGame();
      } else {
        this.updateHeader();
      }
    }, oneSecond);
  }

  endGame() {
    clearInterval(this._interval);
    Application.showResult(this.model);
  }
  updateHeader() {
    const header = new Header(this.model.state);
    this.gameScreenWrp.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  stopGame() {
    clearInterval(this._interval);
  }

  restart() {
    this.model.restart();
  }

  changeContent() {
    this.updateHeader();
    this.question = this.model.doQuestion();
    const view = new GameScreenContent(this.question, this.model);
    this.gameScreenWrp.replaceChild(view.element, this.content.element);
    this.content = view;
    this.bind();
    this.gameScreenWrp.className = `main main--level main--level-${this.question.gameType}`;
  }

  bind() {
    this.content.answerHandler = (answer) => {
      this.model.saveAnswer(answer);
      if (!answer.win) {
        this.model.onMistake();
        if (this.model.mistakes === gameMistakesMax) {
          this.endGame();
        }
      }
      if (this.model.isQuestionsRemained()) {
        this.changeContent();
      } else {
        this.endGame();
      }
    };
  }

  init() {
    this.startGame();
    this.bind();
  }
}

export {GameScreen};
