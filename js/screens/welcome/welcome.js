import {renderScreen} from "../../services/renderScreen";
import {artistElement} from "../arists/artists";
import {getElementFromTemplate} from "../../services/elementFromString";
import {welcomeHTML} from "./welcome.html";

const welcomeElement = getElementFromTemplate(welcomeHTML);

const toArtistsScreen = () => {
  renderScreen(artistElement);
};
const triggerElement = welcomeElement.querySelector(`.main-play`);
triggerElement.addEventListener(`click`, toArtistsScreen);

export {welcomeElement};

