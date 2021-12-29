import _ from 'lodash';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenRound = () => {
  const question = _.random(0, 100);
  const coorrectAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, coorrectAnswer];
};

export default evenRound;
export { evenRules };
