import {commonGameText} from '../../data/commonGameText';
const welcomeModel = {
  title: `Начать игру`,
  text: `Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!`
};

const welcomeElementTemplate = `
<!-- Приветствие -->
<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1><${commonGameText.appTitle}/h1></section>
  <button class="main-play">${welcomeModel.title}</button>
  <h2 class="title main-title">${commonGameText.rulesTitle}</h2>
  <p class="text main-text">
    ${welcomeModel.text}
  </p>
</section>`;


export {welcomeElementTemplate};
