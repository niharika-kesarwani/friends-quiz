var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

var userName = readlineSync.question(chalk.yellow("What is your name? "));

console.log(chalk.blue.bgWhite.bold("\n\nWelcome " + userName + " to FRIENDS quiz!!!!"));

console.log("\n\nAnswer 5 questions to prove your love for FRIENDS!!!\nEnter a, b, c or d as your answers.\nYou will receive 1 point for correct answer and 0 for an incorrect answer.\n\nLet's begin!!!!\n");
console.log(chalk.cyan("\n------------------------------------------\n"))

var userScores = [
  {
    name: 'Hrishita',
    score: 3
  },
  {
    name: 'Niharika',
    score: 4
  }
]

var sets = [
  {
    question: "How many times was Ross legally divorced? ",
    options: [
      "Twice",
      "Three times",
      "Five times",
      "Six times"
    ],
    answer: "b",
    explanation: "He was divorced from Carol, Emily, and Rachel."
  },
  {
    question: "Where did Carol first meet Susan? ",
    options: [
      "In college",
      "At work",
      "At the gym",
      "At Central Perk"
    ],
    answer: "c",
    explanation: "They met at the gym"
  },
  {
    question: "How did Susan and Ross come up with Ben’s name? ",
    options: [
      "It was the doctor's name",
      "They both had uncles named Ben",
      "It's the name of their favorite actor",
      "It was on the janitor's name tag"
    ],
    answer: "d",
    explanation: "It was on the janitor's name tag\nIn “The One With The Birth,” Phoebe puts on a janitor’s uniform that belongs to someone named Ben after locking the three of them in a janitor’s closet for arguing."
  },
  {
    question: "What were Ben's first words?",
    options: [
      "Hi",
      "Bye",
      "Mom",
      "Dumb"
    ],
    answer: "a",
    explanation: "Ross misses it, but he says hi to Rachel in “The One Where Old Yeller Dies.”"
  },
  {
    question: "How long did Ross and Emily date before they got engaged?",
    options: [
      "14 days",
      "6 weeks",
      "A year",
      "3 months"
    ],
    answer: "b",
    explanation: "They dated for 6 weeks"
  }
];


for (var i = 0; i < 5; i++) {
  console.log(chalk.blue.bgWhite("Q" + (i + 1) + ":\n"));
  console.log(sets[i].question + "\n");
  console.log(chalk.yellow("Your options are:\n"));
  for (var j = 0; j < 4; j++) {
    console.log(String.fromCharCode(j + 97) + ". " + sets[i].options[j]);
  }
  var userAnswer = readlineSync.question(chalk.magenta("\nEnter your answer: "));

  if (userAnswer.toLowerCase() === sets[i].answer.toLowerCase()) {
    console.log(chalk.green("\nYay!!!! That's correct!"));
    score++;
  } else {
    console.log(chalk.red("\nOh no! That's wrong!!\n\n") + "The correct option was " + sets[i].answer);
    console.log(sets[i].explanation);
  }

  console.log(chalk.green.bgMagenta("\nCurrent score is " + score + " "));
  console.log("\n------------------------------------------\n")
}

console.log(chalk.black.bgYellow("Your final score is: " + score + "/5 "));
console.log("\n------------------------------------------\n");

var currentHighScore = userScores[0].score;
var currentHighScoreUser = userScores[0].name;
for (var i = 0; i < userScores.length; i++) {
  if (currentHighScore < userScores[i].score) {
    currentHighScore = userScores[i].score
    currentHighScoreUser = userScores[i].name
  }
}

if (currentHighScore < score) {
  console.log(chalk.green("You beat the high score of " + currentHighScoreUser + " with " + currentHighScore + " points!!!!\n"));
  console.log(chalk.yellow("Send the screenshot of this page to me so that I update the high scorer!!!"))
} else {
  console.log(chalk.yellow("The current high scorer is " + currentHighScoreUser + " with " + currentHighScore + " points!"));
}
console.log("\n-----------------------------------\n")

console.log("\nThank you for playing this quiz!!!\n\nSee you soon!!");
console.log("\n------------------------------------------\n");