#!/usr/bin/env node

import startGame from '../src/index.js';
import gcdRound, { gcdRules } from '../games/brain-gcd.js';

startGame(gcdRound, gcdRules);
