import readLineSync from 'readline-sync';

const getPlayerName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readLineSync.question('Your answer: ');
  return answer;
};

export default getPlayerName;
export { getAnswer };
