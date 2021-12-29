#!/usr/bin/env node

import getPlayerName, { getGameSelection } from '../src/cli.js';
import startGame from '../src/index.js';

import evenRound, { gameRules as evenRules } from '../games/brain-even.js';
import calcRound, { gameRules as calcRules } from '../games/brain-calc.js';
import gcdRound, { gameRules as gcdRules } from '../games/brain-gcd.js';
import progressionRound, { gameRules as progressionRules } from '../games/brain-pregression.js';
import primeRound, { gameRules as primeRules } from '../games/brain-prime.js';

const playerName = getPlayerName();
const selectedGame = getGameSelection();

switch (selectedGame) {
  case '1':
  case 'brain-even':
    startGame(evenRound, evenRules, playerName);
    break;

  case '2':
  case 'brain-calc':
    startGame(calcRound, calcRules, playerName);
    break;

  case '3':
  case 'brain-gcd':
    startGame(gcdRound, gcdRules, playerName);
    break;

  case '4':
  case 'brain-progression':
    startGame(progressionRound, progressionRules, playerName);
    break;

  case '5':
  case 'brain-prime':
    startGame(primeRound, primeRules, playerName);
    break;

  default:
    console.log(`Sorry, but game '${selectedGame}' was not found ;(.`);
    console.log(`Let's try again, ${playerName}!`);
    break;
}
