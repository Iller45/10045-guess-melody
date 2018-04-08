import {assert} from 'chai';
import {Score} from "./score";
import {
  ANSWERS_ARRAY,
  TOO_SHOOT_ANSWERS_ARRAY,
  ANSWERS_ARRAY_ALL_RIGHT_BUT_SLOW,
  ZERO_LEADERBOARD, RESULT, ETALON_LEADERBOARD, MIN_NOTES, ZERO_NOTES, IN_TIME, ABOVE_TIME
} from "../testsConst";

describe(`Score test`, () => {
  describe(`Test set score `, () => {
    it(`test shot array `, () => {
      const score = new Score();
      assert.equal(-1, score.setScore(TOO_SHOOT_ANSWERS_ARRAY, MIN_NOTES));
    });
    it(`test normal work `, () => {
      const score = new Score();
      assert.equal(-5, score.setScore(ANSWERS_ARRAY, MIN_NOTES));
    });
    it(`test minimum as possible`, () => {
      const score = new Score();
      assert.equal(10, score.setScore(ANSWERS_ARRAY_ALL_RIGHT_BUT_SLOW, MIN_NOTES));
    });
  });
  describe(`Test display score`, ()=> {
    it(`test zero leaderboard`, () => {
      const score = new Score();
      assert.equal(`Вы заняли 1-ое место из 1 игроков. Это лучше, чем у 0% игроков`, score.dysplayScore(RESULT, ZERO_LEADERBOARD, IN_TIME, MIN_NOTES));
    });
    it(`test time out result`, ()=> {
      const score = new Score();
      assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, score.dysplayScore(RESULT, ETALON_LEADERBOARD, ABOVE_TIME, MIN_NOTES));
    });
    it(`test times out and notes out `, ()=> {
      const score = new Score();
      assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, score.dysplayScore(RESULT, ETALON_LEADERBOARD, ABOVE_TIME, ZERO_NOTES));
    });
    it(`test notes out `, ()=> {
      const score = new Score();
      assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, score.dysplayScore(RESULT, ETALON_LEADERBOARD, IN_TIME, ZERO_NOTES));
    });
    it(`test etalon test `, ()=> {
      const score = new Score();
      assert.equal(`Вы заняли 2-ое место из 5 игроков. Это лучше, чем у 60% игроков`, score.dysplayScore(RESULT, ETALON_LEADERBOARD, IN_TIME, MIN_NOTES));
    });
  });
});

