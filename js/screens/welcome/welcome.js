import {getElementFromTemplate} from "../../services/elementFromString";
import {welcomeElementTemplate} from "./welcome.template";
import newGame from "../game/GameCtrl";
import {gameScreenRenderer} from "../game/gameRender";
import {renderScreen} from "../../services/renderScreen";

const welcomeElement = getElementFromTemplate(welcomeElementTemplate);

const toGame = () => {
  const game = newGame();
  renderScreen(gameScreenRenderer(game));
};
const triggerElement = welcomeElement.querySelector(`.main-play`);
triggerElement.addEventListener(`click`, toGame);

export {welcomeElement};

