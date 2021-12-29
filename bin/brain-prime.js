#!/usr/bin/env node

import startGame from '../src/index.js';
import primeRound, { gameRules as primeRules } from '../games/brain-prime.js';

startGame(primeRound, primeRules);
