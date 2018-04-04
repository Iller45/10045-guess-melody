import {getElementFromTemplate} from "../../services/elementFromString";
import {renderScreen} from "../../services/renderScreen";
import {genreElement} from "../genres/genres";
import {artistsHTML} from "./artists.html";

const artistElement = getElementFromTemplate(artistsHTML);

const toGenresScreen = () => {
  renderScreen(genreElement);
};
artistElement.querySelector(`.main-list`).addEventListener(`click`, toGenresScreen);

export {artistElement};
