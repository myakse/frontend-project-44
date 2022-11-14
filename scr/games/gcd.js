import randomNumberGenerator from '../randomNumberGenerator.js';
import gameRound from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdCalc = (x, y) => {
  const remains = x % y;
  if (remains === 0) {
    return y;
  }
  return gcdCalc(y, remains);
};

export default () => {
  const gcdGames = () => {
    const randomNumber1 = randomNumberGenerator(1, 100);
    const randomNumber2 = randomNumberGenerator(1, 100);
    const question = `${randomNumber1} ${randomNumber2}`;
    const answer = String(gcdCalc(randomNumber1, randomNumber2));
    return [question, answer];
  };

  gameRound(description, gcdGames);
};
