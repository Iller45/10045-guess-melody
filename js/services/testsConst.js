const SCORE_FOR_FAST_ANSWER = 2;
const SCORE_FOR_WRONG_ANSWER = -2;
const MAX_MISTAKES = 3;


const winGame = {
  "gameType": `genre`,
  "timer": 300,
  "questions": 7,
  "answers": [
    {
      "time": 30,
      "win": false
    },
    {
      "time": 30,
      "win": true
    },
    {
      "time": 30,
      "win": true
    },
    {
      "time": 30,
      "win": true
    },
    {
      "time": 30,
      "win": true
    },
    {
      "time": 30,
      "win": true
    },
    {
      "time": 30,
      "win": true
    },
    {
      "time": 30,
      "win": true
    },
    {
      "time": 30,
      "win": true
    },
    {
      "time": 30,
      "win": true
    }
  ],
  "mistakes": 1,
  "result": [],
  "commonStatistics": [
    4,
    5,
    8,
    11
  ]
};

const normalGameMock = `\n    <h2 class="title">Вы настоящий меломан!</h2>\n    <div class="main-stat">За&nbsp;5&nbsp;минут и 00&nbsp;секунд\n      <br>вы&nbsp;набрали 7 баллов (0 быстрых),\n      <br>совершив 1 ошибку</div>\n      <span class="main-comparison">Вы заняли 3-ое место из 5 игроков. Это лучше, чем у 40% игроков</span>\n    </div>`;


const timeoutGame = {
  "gameType": `genre`,
  "timer": 0,
  "questions": 7,
  "answers": [
    {
      "time": 30,
      "win": false
    }
  ],
  "mistakes": 1,
  "result": [],
  "commonStatistics": [
    4,
    5,
    8,
    11
  ]
};
const timeoutGameMock = `\n      <h2 class="title">Увы и ах!</h2>\n      <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;

const manyMistakes = {
  "gameType": `genre`,
  "timer": 0,
  "questions": 7,
  "answers": [
    {
      "time": 30,
      "win": false
    }
  ],
  "mistakes": 3,
  "result": [],
  "commonStatistics": [
    4,
    5,
    8,
    11
  ]
};
const manyMistakesMock = `\n         <h2 class="title">Какая жалость!</h2>\n         <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;


export {
  SCORE_FOR_FAST_ANSWER,
  SCORE_FOR_WRONG_ANSWER,
  MAX_MISTAKES,
  winGame,
  normalGameMock,
  timeoutGame,
  timeoutGameMock,
  manyMistakes,
  manyMistakesMock
};
