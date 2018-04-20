import {Welcome} from "./welcome";
import {renderScreen} from "../../services/renderScreen";

class WelcomePresenter {
  init() {
    this.screen = new Welcome();
    this.screen.onClick = () => {
    };
    return renderScreen(this.screen.element);
  }
}

export {WelcomePresenter};
