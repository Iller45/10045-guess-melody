import * as audioLibrary from "./audioLibrary";

const gameTypes = [`artist`, `genre`];

const makeGameType = () => {
  return gameTypes[Math.floor(Math.random() * gameTypes.length)];
};

const reOrderLibrary = () => {
  return audioLibrary.default.sort(() => {
    return Math.random() - 0.5;
  });
};

const makeChaosAnswer = (answers) => {
  return answers[Math.floor(Math.random() * answers.length)].genre;
};

const trueArtistAnswerIndex = 2;
const sliceStart = 0;
const artistSliceEnd = 3;
const genreSliceEnd = 4;
const answerTimeLimit = 30;
const gameTimeLimit = 300;
const gameAnswerQty = 10;
const gameMistakesMin = 0;
const gameMistakesMax = 3;
const theOneEndings = 1;
const multipleTen = 10;
const multipleFive = 5;


export {makeGameType, reOrderLibrary, makeChaosAnswer, trueArtistAnswerIndex, sliceStart, artistSliceEnd, genreSliceEnd, answerTimeLimit, gameTimeLimit, gameAnswerQty, gameMistakesMin, gameMistakesMax, theOneEndings, multipleFive, multipleTen};
