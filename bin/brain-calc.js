#!/usr/bin/env node

import getPlayerName from '../src/cli.js';
import startGame from '../src/index.js';
import calcRound, { gameRules as calcRules } from '../games/brain-calc.js';

const playerName = getPlayerName();
startGame(calcRound, calcRules, playerName);
