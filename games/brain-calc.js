import _ from 'lodash';

const gameRules = 'What is the result of the expression?';
const expressions = ['+', '-', '*'];

const gameRound = () => {
  const [number1, number2] = [_.random(0, 25), _.random(0, 25)];
  const expression = expressions[_.random(0, expressions.length - 1)];

  const question = `${number1} ${expression} ${number2}`;
  let coorrectAnswer = null;

  if (expression === '+') {
    coorrectAnswer = number1 + number2;
  }
  if (expression === '-') {
    coorrectAnswer = number1 - number2;
  }
  if (expression === '*') {
    coorrectAnswer = number1 * number2;
  }

  return [question, String(coorrectAnswer)];
};

export default gameRound;
export { gameRules };
