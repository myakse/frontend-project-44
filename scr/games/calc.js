import randomNumberGenerator from '../randomNumberGenerator.js';
import gameRound from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return ('Invalid value');
  }
};

export default () => {
  const operators = ['+', '-', '*'];
  const calcGames = () => {
    const randomNumber1 = randomNumberGenerator(1, 100);
    const randomNumber2 = randomNumberGenerator(1, 100);
    const operator = operators[randomNumberGenerator(0, (operators.length - 1))];
    const question = `${randomNumber1} ${operator} ${randomNumber2}`;

    const answer = String(calculate(randomNumber1, operator, randomNumber2));
    return [question, answer];
  };

  gameRound(description, calcGames);
};
