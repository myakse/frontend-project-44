import generateRandomInRange from '../generateRandomInRange.js';
import engine from '../index.js';

const description = 'What number is missing in the progression?';

const progressionCalc = (firstNumber, stepProgression, lengthProgression) => {
  const array = [];
  array.push(firstNumber);
  for (let i = 0; array.length <= lengthProgression; i += 1) {
    array.push(array[i] + stepProgression);
  }
  return array;
};

const makeRound = () => {
  const firstNumber = generateRandomInRange(1, 50);
  const stepProgression = generateRandomInRange(1, 10);
  const lengthProgression = generateRandomInRange(5, 10);
  const progression = progressionCalc(firstNumber, stepProgression, lengthProgression);
  const randomIndex = generateRandomInRange(0, lengthProgression - 1);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startProgressionGames = () => {
  engine(description, makeRound);
};

export default startProgressionGames;
