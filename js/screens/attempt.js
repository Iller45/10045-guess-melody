import {getElementFromTemplate} from "../services/elementFromString";
import {renderScreen} from "../services/renderScreen";
import {welcomeElement} from "./welcome";

export const attemptElement = getElementFromTemplate(`  
  <!-- Результат игры: проигрыш закончились попытки -->
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>
`);

const toNextScreen = () => {
  renderScreen(welcomeElement);
};
const triggerElement = attemptElement.querySelector(`.main-replay`);
triggerElement.addEventListener(`click`, toNextScreen);
