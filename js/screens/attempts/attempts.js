import {getElementFromTemplate} from "../../services/elementFromString";
import {renderScreen} from "../../services/renderScreen";
import {welcomeElement} from "../welcome/welcome";
import {attemptsHTML} from "./attempts.html";

export const attemptElement = getElementFromTemplate(attemptsHTML);

const toWelcomeScreen = () => {
  renderScreen(welcomeElement);
};
const triggerElement = attemptElement.querySelector(`.main-replay`);
triggerElement.addEventListener(`click`, toWelcomeScreen);
