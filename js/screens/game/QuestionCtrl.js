import {AnswerCtrl} from './AnswersCtrl';
import {reOrderLibrary, makeChaosAnswer, trueArtistAnswerIndex, sliceStart, artistSliceEnd, genreSliceEnd} from "../../data/gameConst";

class QuestionCtrl {
  constructor(gameData) {
    this.gameType = gameData.gameType;
    this.library = reOrderLibrary;

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
    return new AnswerCtrl(userAnswer, this.answer, this.gameType);
  }
}

export default QuestionCtrl;
