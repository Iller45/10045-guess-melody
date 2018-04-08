import {getElementFromTemplate} from "../../services/elementFromString";
import {renderScreen} from "../../services/renderScreen";
import {winElement} from "../win/win";
import {timeOutElement} from "../timeOut/timeOut";
import {attemptElement} from "../attempts/attempts";
import {genresTemplate} from "./genres.template";

const genreElement = getElementFromTemplate(genresTemplate);


const triggerElement = genreElement.querySelector(`.genre-answer-send`);

const toResultScreen = () => {
  const checkedCheckboxes = genreElement.querySelectorAll(`[name=answer]:checked`);
  const nextPagesArr = [
    winElement, timeOutElement, attemptElement
  ];
  if (checkedCheckboxes.length === 0) {
    return;
  }
  renderScreen(nextPagesArr[Math.floor(Math.random() * nextPagesArr.length)]);
  for (let checkBox of checkedCheckboxes) {
    checkBox.checked = false;
  }
  checkCheckboxes();
};
triggerElement.addEventListener(`click`, toResultScreen);

const checkCheckboxes = () => {
  if (genreElement.querySelectorAll(`[name=answer]:checked`).length > 0) {
    triggerElement.disabled = false;
  } else {
    triggerElement.disabled = true;
  }
};
checkCheckboxes();
genreElement.querySelector(`.genre`).addEventListener(`click`, checkCheckboxes);
export {genreElement};
