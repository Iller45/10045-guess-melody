import {renderScreen} from "../../services/renderScreen";
import {artistElement} from "../arists/artists";
import {getElementFromTemplate} from "../../services/elementFromString";
import {welcomeElementTemplate} from "./welcome.template";

const welcomeElement = getElementFromTemplate(welcomeElementTemplate);

const toArtistsScreen = () => {
  renderScreen(artistElement);
};
const triggerElement = welcomeElement.querySelector(`.main-play`);
triggerElement.addEventListener(`click`, toArtistsScreen);

export {welcomeElement};

