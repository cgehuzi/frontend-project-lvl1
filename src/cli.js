import readLineSync from "readline-sync";

export const getName = () => {
  const name = readLineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
};
