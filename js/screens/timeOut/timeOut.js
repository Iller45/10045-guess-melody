import {getElementFromTemplate} from "../../services/elementFromString";
import {renderScreen} from "../../services/renderScreen";
import {welcomeElement} from "../welcome/welcome";
import {timeOutTemplate} from "./timeOut.template";

export const timeOutElement = getElementFromTemplate(timeOutTemplate);

const toWelcomeScreen = () => {
  renderScreen(welcomeElement);
};
const triggerElement = timeOutElement.querySelector(`.main-replay`);
triggerElement.addEventListener(`click`, toWelcomeScreen);
