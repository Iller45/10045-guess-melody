import {commonPart} from '../../services/commonPart';
import {welcomeModel} from './welcome.model';

const welcomeElementTemplate = `
<!-- Приветствие -->
<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1><${commonPart.appTitle}/h1></section>
  <button class="main-play">${welcomeModel.title}</button>
  <h2 class="title main-title">${commonPart.rulesTitle}</h2>
  <p class="text main-text">
    ${welcomeModel.text}
  </p>
</section>`;


export {welcomeElementTemplate};
