import _ from 'lodash';

const progressionRules = 'What number is missing in the progression?';

const progressionRound = () => {
  const progressionLength = _.random(5, 10);
  const progressionStep = _.random(1, 20);
  const progressionStart = _.random(0, 20);

  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionItem = progressionStart + progressionStep * i;
    progression.push(progressionItem);
  }

  const randomIndex = _.random(0, progressionLength - 1);
  const coorrectAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, String(coorrectAnswer)];
};

export default progressionRound;
export { progressionRules };
