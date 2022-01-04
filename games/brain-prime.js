import _ from 'lodash';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameRound = () => {
  const question = _.random(2, 200);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default gameRound;
export { gameRules, isPrime };
