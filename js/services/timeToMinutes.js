const timeToMinuts = (time) => {
  return Math.floor(time / 60) + `: ` + time % 60;
};

export {timeToMinuts};
