import {AnswerCtrl} from './AnswersCtrl';
import {
  reOrderLibrary,
  makeChaosAnswer,
  trueArtistAnswerIndex,
  sliceStart,
  artistSliceEnd,
  genreSliceEnd,
  makeGameType
} from "../../data/gameConst";

class QuestionCtrl {
  constructor(gameData) {
    this.game = gameData;
    this.gameType = makeGameType();
    this.library = reOrderLibrary();
    this.time = this.game.timer;

    if (this.gameType === `artist`) {
      this.title = `Кто исполняет эту песню?`;
      this.answer = this.library[trueArtistAnswerIndex];
      this.answers = this.library.slice(sliceStart, artistSliceEnd);
    }

    if (this.gameType === `genre`) {
      this.answers = this.library.slice(sliceStart, genreSliceEnd);
      this.answer = makeChaosAnswer(this.answers);
      this.title = `Выберите ${this.answer} треки`;
    }
  }

  doNextAnswer(userAnswer) {
    this.answerTime = this.time - this.game.timer;
    return new AnswerCtrl(userAnswer, this);
  }
}

export default QuestionCtrl;
