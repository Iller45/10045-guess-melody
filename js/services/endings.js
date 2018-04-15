import {theOneEndings, multipleFive, multipleTen} from "../data/gameConst";

export const setEndings = (number, variants) => {
  if (number === theOneEndings) {
    return variants[0];
  }
  if (number % multipleTen >= multipleFive || number % multipleTen === 0) {
    return variants[2];
  }

  return variants[1];
};
