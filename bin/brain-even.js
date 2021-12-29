#!/usr/bin/env node

import getPlayerName from '../src/cli.js';
import startGame from '../src/index.js';
import evenRound, { gameRules as evenRules } from '../games/brain-even.js';

const playerName = getPlayerName();
startGame(evenRound, evenRules, playerName);
