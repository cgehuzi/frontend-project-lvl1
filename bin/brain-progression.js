#!/usr/bin/env node

import getPlayerName from '../src/cli.js';
import startGame from '../src/index.js';
import progressionRound, { gameRules as progressionRules } from '../games/brain-pregression.js';

const playerName = getPlayerName();
startGame(progressionRound, progressionRules, playerName);
