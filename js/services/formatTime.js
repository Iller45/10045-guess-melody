export const formatTime = (timer) => {
  const minutes = Math.floor(timer / 60);
  let seconds = `${timer - (minutes * 60)}`;
  if (+seconds < 10) {
    seconds = 0 + seconds;
  }
  return {minutes, seconds};
};
