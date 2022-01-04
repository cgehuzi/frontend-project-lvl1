import _ from 'lodash';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameRound = () => {
  const question = _.random(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default gameRound;
export { gameRules, isEven };
