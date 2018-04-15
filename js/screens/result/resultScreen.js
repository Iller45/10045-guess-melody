import {welcomeElement} from '../../screens/welcome/welcome';
import {renderScreen} from '../../services/renderScreen';
import {getElementFromTemplate} from '../../services/elementFromString';
import {commonGameText} from "../../data/commonGameText";

export default (userResult) => {
  const template = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>${commonGameText.appTitle}</h1></section>
    ${userResult.doUserResult}
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

  const content = getElementFromTemplate(template);
  const replayBtn = content.querySelector(`.main-replay`);

  replayBtn.addEventListener(`click`, () => {
    renderScreen(welcomeElement);
  });

  return content;
};
