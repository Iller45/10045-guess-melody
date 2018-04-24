import {GameModel} from "./screens/game/GameModel";
import {renderScreen} from "./services/renderScreen";
import {GameScreen} from './screens/game/GameScreen';
import {WelcomePage} from "./screens/welcome/WelcomePage";
import {ResultView} from "./screens/result/resultScreen";


class Application {
  static doWelcomePage() {
    const welcome = new WelcomePage();
    renderScreen(welcome.element);
  }

  static startGame() {
    const model = new GameModel();
    const gameScreen = new GameScreen(model);
    renderScreen(gameScreen.element);
    gameScreen.init();
  }

  static showResult(model) {
    const result = new ResultView(model);
    renderScreen(result.element);
  }
}

export {Application};
