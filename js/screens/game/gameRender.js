import {getElementFromTemplate} from "../../services/elementFromString";
import getHeader from '../common/header';
import {renderScreen} from '../../services/renderScreen';
import resultScreen from '../result/resultScreen';
import {gameMistakesMax} from "../../data/gameConst";

export const gameScreenRenderer = (Game) => {
  const header = getHeader(Game);
  const question = Game.doNextQuestion();

  let content = ``;
  if (Game.gameType === `artist`) {
    content = `
    <div class="player-wrapper">
      <div class="player">
        <audio src="${question.answer.src}" data-name="${question.answer.name}"></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <form class="main-list">
      ${question.answers.map((answer, index) => `<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${answer.name}"/>
      <label class="main-answer" for="answer-${index}">
      <img class="main-answer-preview" src="${answer.image}" alt="${answer.artist}" width="134" height="134">
      ${answer.artist}</label>
    </div>`).join(``)}
    </form>`;
  }

  if (Game.gameType === `genre`) {
    content = `
    <form class="genre">
      ${question.answers.map((answer, index) => `<div class="genre-answer">
      <div class="player-wrapper">
        <div class="player">
          <audio src="${answer.src}" data-name="${answer.name}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <input type="checkbox" name="answer" value="${answer.content}" id="a-${index}">
      <label class="genre-answer-check" for="a-${index}"></label>
    </div>`).join(``)};
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>`;
  }

  const template = `
  <section class="main main--level main--level-${Game.type}">
    ${header}
    <div class="main-wrap">
      <h2 class="title main-title">${question.title}</h2>
      ${content}
    </div>
  </section>`;

  const page = getElementFromTemplate(template);

  const answerHandler = (answer) => {
    Game.answers.push(answer);
    if (!answer.win) {
      Game.mistakes++;
      if (Game.mistakes === gameMistakesMax) {
        renderScreen(resultScreen(Game));
        return;
      }
    }
    if (Game.questions > 0) {
      Game.doNextScreenType();
      renderScreen(gameScreenRenderer(Game));
    } else {
      renderScreen(resultScreen(Game));
    }
  };

  if (Game.gameType === `artist`) {
    const answerBtns = Array.from(page.querySelectorAll(`.main-answer-r`));
    answerBtns.forEach((btn) => {
      btn.addEventListener(`change`, () => {
        const userAnswer = question.doNextAnswer(btn.value, Game.gameTime);
        answerHandler(userAnswer);
      });
    });
  }

  if (Game.gameType === `genre`) {
    const form = page.querySelector(`.genre`);
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
      const userAnswer = question.doNextAnswer(userOptions, Game.gameTime);
      answerHandler(userAnswer);
    });
  }
  return page;
};
