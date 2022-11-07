import readlineSync from 'readline-sync';

const gameRound = (description, brainGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = brainGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};

export default gameRound;
