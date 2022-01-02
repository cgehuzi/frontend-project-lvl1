import _ from 'lodash';

const gameRules = 'What is the result of the expression?';
const expressions = ['+', '-', '*'];

const getExpressionResult = (expression, number1, number2) => {
  switch (expression) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const gameRound = () => {
  const [number1, number2] = [_.random(0, 25), _.random(0, 25)];
  const expression = expressions[_.random(0, expressions.length - 1)];

  const question = `${number1} ${expression} ${number2}`;
  const coorrectAnswer = getExpressionResult(expression, number1, number2);

  return [question, String(coorrectAnswer)];
};

export default gameRound;
export { gameRules };
