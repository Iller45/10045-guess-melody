import {getElementFromTemplate} from "../services/elementFromString";
import {renderScreen} from "../services/renderScreen";
import {welcomeElement} from "./welcome";

export const timeOutElement = getElementFromTemplate(`  
  <!-- Результат игры: проигрыш время вышло -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`);

const toNextScreen = () => {
  renderScreen(welcomeElement);
};
const triggerElement = timeOutElement.querySelector(`.main-replay`);
triggerElement.addEventListener(`click`, toNextScreen);
