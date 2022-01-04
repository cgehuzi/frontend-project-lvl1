import _ from 'lodash';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (a, b) => {
  const [min, max] = a > b ? [b, a] : [a, b];

  if (max % min === 0) {
    return min;
  }

  for (let i = Math.floor(min / 2); i >= 1; i -= 1) {
    if (min % i === 0 && max % i === 0) {
      return i;
    }
  }
};

const gameRound = () => {
  const [number1, number2] = [_.random(2, 100), _.random(2, 100)];

  const question = `${number1} ${number2}`;
  const answer = getGreatestDivisor(number1, number2);

  return [question, String(answer)];
};

export default gameRound;
export { gameRules, getGreatestDivisor };
