import {AbstractView} from "../../abstract-view";

class GameScreenContent extends AbstractView {
  constructor(gameModel) {
    super();
    this.gameModel = gameModel;
  }

  get template() {
    let content = ``;
    if (this.gameModel.gameType === `artist`) {
      content = `
    <div class="main-wrap">
      <h2 class="title main-title">${this.gameModel.title}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${this.gameModel.answer.src}" data-name="${this.gameModel.answer.name}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${this.gameModel.answers.map((answer, index) => `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${answer.name}"/>
        <label class="main-answer" for="answer-${index}">
        <img class="main-answer-preview" src="${answer.image}" alt="${answer.artist}" width="134" height="134">
        ${answer.artist}</label>
      </div>`).join(``)}
      </form>
    </div>`;
    }

    if (this.gameModel.gameType === `genre`) {
      content = `
    <div class="main-wrap">
      <h2 class="title main-title">${this.gameModel.title}</h2>
      <form class="genre">
        ${this.gameModel.answers.map((answer, index) => `<div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio src="${answer.src}" data-name="${answer.name}"></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="${answer.genre}" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`).join(``)};
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>`;
    }
    return content;
  }

  bind() {
    if (this.gameModel.gameType === `artist`) {
      const answerBtns = Array.from(this.element.querySelectorAll(`.main-answer-r`));
      answerBtns.forEach((btn) => {
        btn.addEventListener(`change`, (e) => {
          e.preventDefault();
          const userAnswer = this.gameModel.doNextAnswer(btn.value, this.gameModel);
          this.answerHandler(userAnswer);
        });
      });
    }

    if (this.gameModel.gameType === `genre`) {
      const form = this.element.querySelector(`.genre`);
      const checkboxes = Array.from(form.querySelectorAll(`input[type='checkbox']`));
      const formBtn = form.querySelector(`.genre-answer-send`);
      formBtn.setAttribute(`disabled`, `disabled`);
      const checkActive = () => {
        return checkboxes.some((checkbox) => {
          return checkbox.checked;
        });
      };

      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.addEventListener(`change`, () => {
          const active = checkActive();

          if (checkbox.checked) {
            formBtn.removeAttribute(`disabled`);
          } else if (!active) {
            formBtn.setAttribute(`disabled`, `disabled`);
          }
        });
      });

      form.addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        const userOptions = Array.from(form.querySelectorAll(`input[type='checkbox']:checked`));
        const userAnswer = this.gameModel.doNextAnswer(userOptions, this.gameModel);
        this.answerHandler(userAnswer);
      });
    }
  }
  answerHandler() {
  }
}

export {GameScreenContent};
