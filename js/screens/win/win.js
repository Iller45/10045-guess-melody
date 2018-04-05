import {getElementFromTemplate} from "../../services/elementFromString";
import {renderScreen} from "../../services/renderScreen";
import {welcomeElement} from "../welcome/welcome";
import {winHTML} from "./win.html";

export const winElement = getElementFromTemplate(winHTML);
const toWelcomeScreen = () => {
  renderScreen(welcomeElement);
};
const triggerElement = winElement.querySelector(`.main-replay`);
triggerElement.addEventListener(`click`, toWelcomeScreen);

