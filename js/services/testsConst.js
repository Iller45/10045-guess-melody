const ANSWERS_ARRAY_ALL_RIGHT_BUT_SLOW = [
  {
    win: true,
    time: 64
  },
  {
    win: true,
    time: 34
  },
  {
    win: true,
    time: 45
  },
  {
    win: true,
    time: 68
  },
  {
    win: true,
    time: 30
  },
  {
    win: true,
    time: 32
  },
  {
    win: true,
    time: 67
  },
  {
    win: true,
    time: 31
  },
  {
    win: true,
    time: 44
  },
  {
    win: true,
    time: 30
  }
];
const ANSWERS_ARRAY = [
  {
    win: true,
    time: 24
  },
  {
    win: false,
    time: 14
  },
  {
    win: false,
    time: 45
  },
  {
    win: false,
    time: 68
  },
  {
    win: false,
    time: 30
  },
  {
    win: true,
    time: 2
  },
  {
    win: true,
    time: 67
  },
  {
    win: true,
    time: 20
  },
  {
    win: false,
    time: 44
  },
  {
    win: false,
    time: 13
  }
];

const TOO_SHOOT_ANSWERS_ARRAY = [
  {
    win: true,
    time: 24
  },
  {
    win: false,
    time: 14
  },
  {
    win: false,
    time: 45
  },
  {
    win: false,
    time: 68
  },
  {
    win: false,
    time: 30
  }
];

const RESULT = {
  time: 300,
  notes: 1,
  score: 10
};

const ETALON_LEADERBOARD = [4, 5, 8, 11];
const ZERO_LEADERBOARD = [];

const MAX_NOTES = 3;
const MIN_NOTES = 1;
const ZERO_NOTES = 0;
const ABOVE_TIME = 400;
const IN_TIME = 290;
const TIME_LIMIT = 300;
const ANSWER_TIME_LIMIT = 30;
const MIN_ANSWER_QTY = 10;
const SCORE_FOR_FAST_ANSWER = 2;
const SCORE_FOR_NORMAL_ANSWER = 1;
const SCORE_FOR_WRONG_ANSWER = -2;

export {
  ANSWERS_ARRAY, TOO_SHOOT_ANSWERS_ARRAY, ANSWERS_ARRAY_ALL_RIGHT_BUT_SLOW, RESULT, ETALON_LEADERBOARD, ZERO_LEADERBOARD, MAX_NOTES, MIN_NOTES, ZERO_NOTES, ABOVE_TIME, IN_TIME, TIME_LIMIT, ANSWER_TIME_LIMIT, MIN_ANSWER_QTY, SCORE_FOR_FAST_ANSWER, SCORE_FOR_NORMAL_ANSWER, SCORE_FOR_WRONG_ANSWER};
