import {assert} from 'chai';
import {Score} from "./score";
import {
  winGame,
  normalGameMock,
  timeoutGame,
  timeoutGameMock,
  manyMistakes,
  manyMistakesMock
} from "../testsConst";

describe(`Score test`, () => {
  describe(`Test display score `, () => {
    it(`test normal work `, () => {
      const score = new Score(winGame);
      assert.equal(normalGameMock, score.displayScore());
    });
    it(`test time out`, () => {
      const score = new Score(timeoutGame);
      assert.equal(timeoutGameMock, score.displayScore());
    });
    it(`test many mistakes`, () => {
      const score = new Score(manyMistakes);
      assert.equal(manyMistakesMock, score.displayScore());
    });
  });
});

