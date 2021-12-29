import _ from 'lodash';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRound = () => {
  const question = _.random(0, 100);
  const coorrectAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, coorrectAnswer];
};

export default gameRound;
export { gameRules };
