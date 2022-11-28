import generateRandomInRange from '../generateRandomInRange.js';
import engine from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Operator ${operator} - is invalid`);
  }
};

const makeRound = () => {
  const randomNumber1 = generateRandomInRange(1, 100);
  const randomNumber2 = generateRandomInRange(1, 100);
  const operator = operators[generateRandomInRange(0, (operators.length - 1))];
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;

  const answer = String(calculate(randomNumber1, operator, randomNumber2));
  return [question, answer];
};

const startCalcGames = () => {
  engine(description, makeRound);
};

export default startCalcGames;
