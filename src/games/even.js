import engine from '../index.js';
import generateRandomInRange from '../generateRandomInRange.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeRound = () => {
  const randomNumber = generateRandomInRange(1, 100);
  const question = String(randomNumber);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGames = () => {
  engine(description, makeRound);
};

export default startEvenGames;
