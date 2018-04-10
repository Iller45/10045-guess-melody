import {getElementFromTemplate} from "../../services/elementFromString";
import {renderScreen} from "../../services/renderScreen";
import {genreElement} from "../genres/genres";
import {artistsTemplate} from "./artists.template";

const artistElement = getElementFromTemplate(artistsTemplate);

const toGenresScreen = () => {
  renderScreen(genreElement);
};
artistElement.querySelector(`.main-list`).addEventListener(`click`, toGenresScreen);

export {artistElement};
