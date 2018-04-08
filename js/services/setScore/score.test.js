import {assert} from 'chai';
import {Score} from "./score";
import {
  ANSWERS_ARRAY,
  TOO_SHOOT_ANSWERS_ARRAY,
  ANSWERS_ARRAY_ALL_RIGHT_BUT_SLOW,
  ZERO_LEADERBOARD, RESULT, ETALON_LEADERBOARD
} from "../commonConst";

// const someSimplify = (errorMessage, value) => {
//   const timeValue = value;
//   assert.throws(() => new Timer(timeValue), errorMessage);
// };
//

describe(`Score test`, () => {
  describe(`Test set score `, () => {
    it(`test shot array `, () => {
      const score = new Score();
      assert.equal(-1, score.setScore(TOO_SHOOT_ANSWERS_ARRAY, 2));
    });
    it(`test normal work `, () => {
      const score = new Score(2);
      assert.equal(-5, score.setScore(ANSWERS_ARRAY, 2));
    });
    it(`test minimum as possible`, () => {
      const score = new Score();
      assert.equal(10, score.setScore(ANSWERS_ARRAY_ALL_RIGHT_BUT_SLOW, 2));
    });
  });
  describe(`Test display score`, ()=> {
    it(`test zero leaderboard`, () => {
      const score = new Score();
      assert.equal(`Вы заняли 1-ое место из 1 игроков. Это лучше, чем у 0% игроков`, score.dysplayScore(RESULT, ZERO_LEADERBOARD, 290, 2));
    });
    it(`test time out result`, ()=> {
      const score = new Score();
      assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, score.dysplayScore(RESULT, ETALON_LEADERBOARD, 400, 2));
    });
    it(`test times out and notes out `, ()=> {
      const score = new Score();
      assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, score.dysplayScore(RESULT, ETALON_LEADERBOARD, 400, 0));
    });
    it(`test notes out `, ()=> {
      const score = new Score();
      assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, score.dysplayScore(RESULT, ETALON_LEADERBOARD, 200, 0));
    });
    it(`test etalon test `, ()=> {
      const score = new Score();
      assert.equal(`Вы заняли 2-ое место из 5 игроков. Это лучше, чем у 60% игроков`, score.dysplayScore(RESULT, ETALON_LEADERBOARD, 200, 1));
    });
  });
});

