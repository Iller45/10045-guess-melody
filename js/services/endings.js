export const setEndings = (number, variants) => {
  if (number === 1) {
    return variants[0];
  }

  if (number % 10 >= 5 || number % 10 === 0) {
    return variants[2];
  }

  return variants[1];
};
