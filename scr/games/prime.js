import randomNumberGenerator from '../randomNumberGenerator.js';
import gameRound from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumber = (randomNumber) => {
  for (let i = 0; i < randomNumber; i += 1) {
    if (randomNumber !== 2 && randomNumber % 2 === 0) {
      return false;
    }
  } return true;
};

export default () => {
  const startPrimeGames = () => {
    const numberRandom = randomNumberGenerator(1, 100);
    const question = `${numberRandom}`;
    const answer = String((primeNumber(numberRandom) ? 'yes' : 'no'));
    return [question, answer];
  };

  gameRound(description, startPrimeGames);
};
