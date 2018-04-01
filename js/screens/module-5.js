import {getElementFromTemplate} from "../services/elementFromString";
import {createScreen} from "../services/createScreen";
import {moduleOneElement} from "./module-1";

export const moduleFiveElement = getElementFromTemplate(`  
  <!-- Результат игры: проигрыш время вышло -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`);

const toNextScreen = () => {
  createScreen(moduleOneElement);
};
const triggerElement = moduleFiveElement.querySelector(`.main-replay`);
triggerElement.addEventListener(`click`, toNextScreen);
