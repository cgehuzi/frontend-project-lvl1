#!/usr/bin/env node

import startGame from '../src/index.js';
import calcRound, { gameRules as calcRules } from '../games/brain-calc.js';

startGame(calcRound, calcRules);
