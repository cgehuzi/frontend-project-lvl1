#!/usr/bin/env node

import _ from 'lodash';
import getPlayerName, { getAnswer } from '../src/cli.js';

const playerName = getPlayerName();
const roundCount = 3;

const evenRound = () => {
  const question = _.random(0, 100);
  const coorrectAnswer = question % 2 === 0 ? 'yes' : 'no';

  const playerAnswer = getAnswer(question);

  return [coorrectAnswer, playerAnswer];
};

const evenGame = (rounds) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= rounds; i += 1) {
    const [coorrectAnswer, playerAnswer] = evenRound();

    if (coorrectAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${coorrectAnswer}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
  return true;
};

evenGame(roundCount);
