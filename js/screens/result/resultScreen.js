import {commonGameText} from "../../data/commonGameText";
import {AbstractView} from "../../abstract-view";
import {Application} from "../../app";

class ResultView extends AbstractView {
  constructor(gameModel) {
    super();
    this.game = gameModel;
  }
  get template() {
    return `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>${commonGameText.appTitle}</h1></section>
    ${this.game.doUserResult}
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;
  }
  bind() {
    const replayBtn = this.element.querySelector(`.main-replay`);
    replayBtn.addEventListener(`click`, () => {
      Application.startGame();
    });
  }
}

export {ResultView};
