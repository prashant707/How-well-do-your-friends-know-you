var readLineSync = require('readline-sync');
var score = 0;
var name ="Prashant's";
var highScore = [{
  name:"Prashant",
  score:5,
}];

var questions = [{
  question: "Who is "+name+" my favorite superhero ? ",
  answer: "Iron Man",
},
{
  question: "Who is "+name+" favorite movie character ? ",
  answer: "John Wick",
},
{
  question: "What is the name of "+name+" favorite movie ? ",
  answer: "iron man",
},
{
  question: "Which is "+name+" favourite sport ? ",
  answer: "Cricket",
},
{
  question: "In which does "+name+" live ? ",
  answer: "Sheoganj",
}
              ]



function askQuestion(question, answer) {
  var userAnswer = readLineSync.question(question);
  var result = "";
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    result = "You are right!";

  }
  else {
    result = "You are wrong!";
  }

  console.log(result);
  console.log("Current Score ",score);
}


function welcome(){

  var userName = readLineSync.question("What is your name     ? ");
  console.log("Welcome ",userName);
}

function game(){
for(var i=0;i<questions.length;i++){
 
 askQuestion(questions[i].question,questions[i].answer);
 
  
}

}

function finalScore(){
console.log("--------------");
console.log("Final Score - ",score);
console.log("--------------");

}


welcome();
game();
finalScore();


