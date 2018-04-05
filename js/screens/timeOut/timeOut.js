import {getElementFromTemplate} from "../../services/elementFromString";
import {renderScreen} from "../../services/renderScreen";
import {welcomeElement} from "../welcome/welcome";
import {timeOutHTML} from "./timeOut.html";

export const timeOutElement = getElementFromTemplate(timeOutHTML);

const toWelcomeScreen = () => {
  renderScreen(welcomeElement);
};
const triggerElement = timeOutElement.querySelector(`.main-replay`);
triggerElement.addEventListener(`click`, toWelcomeScreen);
