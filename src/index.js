import { getAnswer } from './cli.js';

const roundsCount = 3;

const startGame = (gameFunction, gameRules, playerName) => {
  console.log(gameRules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, coorrectAnswer] = gameFunction();
    const playerAnswer = getAnswer(question);

    if (coorrectAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${coorrectAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
  return true;
};

export default startGame;
