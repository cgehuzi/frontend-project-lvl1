import readLineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readLineSync.question('Your answer: ');
  return answer;
};
