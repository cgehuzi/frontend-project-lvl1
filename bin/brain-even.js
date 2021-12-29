#!/usr/bin/env node

import startGame from '../src/index.js';
import evenRound, { evenRules } from '../games/brain-even.js';

startGame(evenRound, evenRules);
