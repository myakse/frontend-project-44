import generateRandomInRange from '../generateRandomInRange.js';
import engine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdCalc = (x, y) => {
  const remains = x % y;
  if (remains === 0) {
    return y;
  }
  return gcdCalc(y, remains);
};

const makeRound = () => {
  const randomNumber1 = generateRandomInRange(1, 100);
  const randomNumber2 = generateRandomInRange(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(gcdCalc(randomNumber1, randomNumber2));
  return [question, answer];
};

const startGcdGames = () => {
  engine(description, makeRound);
};

export default startGcdGames;
