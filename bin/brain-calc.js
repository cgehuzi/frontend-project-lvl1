#!/usr/bin/env node

import _ from 'lodash';
import getPlayerName, { getAnswer } from '../src/cli.js';

const playerName = getPlayerName();
const roundCount = 3;
const expressions = ['+', '-', '*'];

const calcRound = () => {
  const [number1, number2] = [_.random(0, 25), _.random(0, 25)];
  const expression = expressions[_.random(0, expressions.length - 1)];

  const question = `${number1} ${expression} ${number2}`;
  let coorrectAnswer = null;

  if (expression === '+') {
    coorrectAnswer = number1 + number2;
  }
  if (expression === '-') {
    coorrectAnswer = number1 - number2;
  }
  if (expression === '*') {
    coorrectAnswer = number1 * number2;
  }

  const playerAnswer = Number(getAnswer(question));

  return [coorrectAnswer, playerAnswer];
};

const calcGame = (rounds) => {
  console.log('What is the result of the expression?');

  for (let i = 1; i <= rounds; i += 1) {
    const [coorrectAnswer, playerAnswer] = calcRound();

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

calcGame(roundCount);
