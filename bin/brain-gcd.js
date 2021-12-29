#!/usr/bin/env node

import getPlayerName from '../src/cli.js';
import startGame from '../src/index.js';
import gcdRound, { gameRules as gcdRules } from '../games/brain-gcd.js';

const playerName = getPlayerName();
startGame(gcdRound, gcdRules, playerName);
