import _ from 'lodash';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGreatestDivisor = (a, b) => (a % b > 0 ? getGreatestDivisor(b, a % b) : b);

const gameRound = () => {
  const [number1, number2] = [_.random(2, 100), _.random(2, 100)];

  const question = `${number1} ${number2}`;
  const answer = getGreatestDivisor(number1, number2);

  return [question, String(answer)];
};

export default gameRound;
export { gameRules, getGreatestDivisor };
