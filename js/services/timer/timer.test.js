import {assert} from 'chai';
import {Timer} from './timer.js';

const time = 2;
const timer = new Timer(time);

const someSimplify = (errorMessage, value) => {
  const timeValue = value;
  assert.throws(() => new Timer(timeValue), errorMessage);
};

describe(`Timer test`, () => {
  describe(`Test incorrect data`, () => {
    it(`should not allow set negative values`, () => {
      const strokeTime = `five`;
      someSimplify(`It's must be a number`, strokeTime);
    });
    it(`should not allow set non number value`, () => {
      const negativeTime = -5;
      someSimplify(`It's must above zero`, negativeTime);
    });
  });
  describe(`Test timer work`, () => {
    it(`tick from 2 to 1`, () => {
      assert.equal(1, timer.tick());
    });
    it(`tick from 1 to 0 and time is over`, () => {
      assert.equal(`Time is over!`, timer.tick());
    });
  });
});
