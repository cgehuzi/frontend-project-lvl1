import _ from 'lodash';

const gameRules = 'What number is missing in the progression?';

const getProgression = (length, step, start) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const item = start + step * i;
    progression.push(item);
  }

  return progression;
};

const hideRandomItem = (progression) => {
  const index = _.random(0, progression.length - 1);
  const item = progression[index];
  progression[index] = '..';

  return item;
};

const gameRound = () => {
  const length = _.random(5, 10);
  const step = _.random(1, 20);
  const start = _.random(0, 20);
  const progression = getProgression(length, step, start);

  const answer = hideRandomItem(progression);
  const question = progression.join(' ');

  return [question, String(answer)];
};

export default gameRound;
export { gameRules, getProgression, hideRandomItem };
