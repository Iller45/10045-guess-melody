import {getElementFromTemplate} from "../../services/elementFromString";
import {renderScreen} from "../../services/renderScreen";
import {welcomeElement} from "../welcome/welcome";
import {attemptsTemplate} from "./attempts.template";

export const attemptElement = getElementFromTemplate(attemptsTemplate);

const toWelcomeScreen = () => {
  renderScreen(welcomeElement);
};
const triggerElement = attemptElement.querySelector(`.main-replay`);
triggerElement.addEventListener(`click`, toWelcomeScreen);
