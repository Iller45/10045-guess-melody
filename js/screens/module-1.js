import {getElementFromTemplate} from "../services/elementFromString";
import {createScreen} from "../services/createScreen";
import {moduleTwoElement} from "./module-2";

const moduleOneElement = getElementFromTemplate(`  
  <!-- Приветствие -->
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>
`);

const toNextScreen = () => {
  createScreen(moduleTwoElement);
};

const triggerElement = moduleOneElement.querySelector(`.main-play`);
triggerElement.addEventListener(`click`, toNextScreen);

export {moduleOneElement};
