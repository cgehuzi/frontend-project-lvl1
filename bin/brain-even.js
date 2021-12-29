#!/usr/bin/env node

import startGame from '../src/index.js';
import evenRound, { gameRules as evenRules } from '../games/brain-even.js';

startGame(evenRound, evenRules);
