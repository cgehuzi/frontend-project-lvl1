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

const getGameSelection = () => {
  console.log('You can play one of the games:');
  console.log('1 : brain-even');
  console.log('2 : brain-calc');
  console.log('3 : brain-gcd');
  console.log('4 : brain-progression');
  console.log('5 : brain-prime');
  console.log('Which game do you choose?');

  const answer = readLineSync.question('Number or name: ');
  return answer;
};

export default getPlayerName;
export { getAnswer, getGameSelection };
