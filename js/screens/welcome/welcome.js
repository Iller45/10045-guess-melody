import {welcomeElementTemplate} from "./welcome.template";
import {AbstractView} from "../../abstract-view";


class Welcome extends AbstractView {
  constructor() {
    super();
  }
  get template() {
    return welcomeElementTemplate;
  }
  bind() {
    this.playBtn = this.element.querySelector(`.main-play`);
    this.onPlayBtnClick = (evt) => {
      evt.preventDefault();
      this.onClick();
    };
    this.playBtn.addEventListener(`click`, this.onPlayBtnClick);
  }

  onClick() {
  }

}

export {Welcome};

