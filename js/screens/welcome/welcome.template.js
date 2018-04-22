import {commonGameText} from '../../data/commonGameText';

const welcomeText = {
  title: `Начать игру`,
  content: `Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!`

};

const welcomeElementTemplate = `
<!-- Приветствие -->
<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1><${commonGameText.appTitle}/h1></section>
  <button class="main-play">${welcomeText.title}</button>
  <h2 class="title main-title">${commonGameText.rulesTitle}</h2>
  <p class="text main-text">
    ${welcomeText.content}
  </p>
</section>`;

export {welcomeElementTemplate};
