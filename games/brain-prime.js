import _ from 'lodash';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }

  if (number % 2 === 0) {
    return false;
  }

  for (let i = 1; i <= number / 3; i += 2) {
    const divisor = i + 2;
    if (number === divisor) {
      return true;
    }

    if (number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

const gameRound = () => {
  const question = _.random(2, 200);
  const coorrectAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, coorrectAnswer];
};

export default gameRound;
export { gameRules };
