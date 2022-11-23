import randomNumberGenerator from '../randomNumberGenerator.js';
import engine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumber = (randomNumber) => {
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber < i || randomNumber % i === 0) {
      return false;
    }
  } return true;
};

const makeRound = () => {
  const numberRandom = randomNumberGenerator(1, 100);
  const question = String(numberRandom);
  const answer = primeNumber(numberRandom) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGames = () => {
  engine(description, makeRound);
};

export default startPrimeGames;
