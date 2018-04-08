import {getElementFromTemplate} from "../../services/elementFromString";
import {renderScreen} from "../../services/renderScreen";
import {welcomeElement} from "../welcome/welcome";
import {winTemplate} from "./win.template";

export const winElement = getElementFromTemplate(winTemplate);
const toWelcomeScreen = () => {
  renderScreen(welcomeElement);
};
const triggerElement = winElement.querySelector(`.main-replay`);
triggerElement.addEventListener(`click`, toWelcomeScreen);

