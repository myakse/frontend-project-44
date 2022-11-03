import readlineSync from 'readline-sync';

const evenGames = () => {
  console.log('Welcome to the Brain Games!');  
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
    
  for (let i = 0; i < 3; i += 1) {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const probabledAnswer = userAnswer === 'yes' ? "no" : "yes";
  if ((randomNumber % 2 === 0 && userAnswer === 'yes') || (randomNumber % 2 !== 0 && userAnswer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${probabledAnswer}'.`)
    console.log(`Let's try again, ${userName}!`);
    return;
  };  
  }
  console.log(`Congratulations, ${userName}!`);
};

export default evenGames;