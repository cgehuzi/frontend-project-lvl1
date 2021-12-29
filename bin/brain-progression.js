#!/usr/bin/env node

import startGame from '../src/index.js';
import progressionRound, { gameRules as progressionRules } from '../games/brain-pregression.js';

startGame(progressionRound, progressionRules);
