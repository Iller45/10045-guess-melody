const makeException = (text) => {
  throw new Error(text);
};

class Timer {
  constructor(time) {
    if (typeof time !== `number`) {
      makeException(`It's must be a number`);
    }
    if (time < 0) {
      makeException(`It's must above zero`);
    }
    this.startTime = 0;
    this.finishAlert = `Time is over!`;
    this.currTime = time;
  }

  tick() {
    if (this.currTime === this.startTime) {
      return this.finishAlert;
    }
    this.currTime--;
    return this.currTime || this.finishAlert;
  }
}

export {Timer};
