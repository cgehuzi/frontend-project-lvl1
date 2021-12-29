#!/usr/bin/env node

import getPlayerName from '../src/cli.js';
import startGame from '../src/index.js';
import primeRound, { gameRules as primeRules } from '../games/brain-prime.js';

const playerName = getPlayerName();
startGame(primeRound, primeRules, playerName);
