import {welcomeElementTemplate} from "./welcome.template";
import {AbstractView} from "../../abstract-view";
import {Application} from "../../app";

class WelcomePage extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return welcomeElementTemplate;
  }

  bind() {
    const triggerElement = this.element.querySelector(`.main-play`);
    triggerElement.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      Application.startGame();
    });
  }
}

export {WelcomePage};
