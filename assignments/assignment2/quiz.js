var count = 0;

//variables
var quiz = [];
quiz[0] = new Question(
  "HTML stands for?",
  "Hyper Text Markup Language",
  "	High Text Markup Language",
  "Hyper Tabular Markup Language"
);
quiz[1] = new Question(
  "Which of the following tag is used to mark a begining of paragraph ?",
  "P",
  "br",
  "tr"
);
quiz[2] = new Question(
  "From which tag descriptive list starts ?",
  "DL",
  "LL",
  "DD"
);
quiz[3] = new Question(
  "Correct HTML tag for the largest heading is",
  "h1",
  "h6",
  "head"
);
quiz[4] = new Question(
  "WWW is based on which model?",
  "Client-server",
  "Local-server",
  "3-tier"
);
quiz[5] = new Question(
  "Web pages starts with which ofthe following tag?",
  "HTML",
  "Title",
  "From"
);
quiz[6] = new Question("HTML is a subset of", "SGML", "SGMT", "SGMD");
quiz[7] = new Question(
  "Which of the following is a container?",
  "SELECT",
  "INPUT",
  "HTML"
);
quiz[8] = new Question(
  "From which tag the descriptive list starts?",
  "DL",
  "DD",
  "DS"
);
quiz[9] = new Question(
  "Base tag is designed to appear only between",
  "HEAD",
  "TITLE",
  "BODY"
);

var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function (event) {
  btnProvideQuestion();
});

function Question(question, rightAnswer, wrongAnswer1, wrongAnswer2) {
  this.question = question;
  this.rightAnswer = rightAnswer;
  this.wrongAnswer1 = wrongAnswer1;
  this.wrongAnswer2 = wrongAnswer2;
}

function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

function btnProvideQuestion() {
  if (count != 5) {
    var randomNumber = Math.floor(Math.random() * quiz.length);
    randomQuestion = quiz[randomNumber]; //getQuestion
    answers = [
      randomQuestion.rightAnswer,
      randomQuestion.wrongAnswer1,
      randomQuestion.wrongAnswer2,
    ];
    shuffle(answers);

    document.getElementById("question").innerHTML = randomQuestion.question;
    document.getElementById("answerA").value = answers[0];
    document.getElementById("answerA").innerHTML = answers[0];
    document.getElementById("answerB").value = answers[1];
    document.getElementById("answerB").innerHTML = answers[1];
    document.getElementById("answerC").value = answers[2];
    document.getElementById("answerC").innerHTML = answers[2];
  } else {
    alert("Quiz Finish");
    document.getElementById("question").innerHTML = "";
    document.getElementById("answerA").innerHTML = "";
    document.getElementById("answerB").innerHTML = "";
    document.getElementById("answerC").innerHTML = "";
  }
  count++;
}

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  checkAnswer(answerA);
}

function answerB_clicked() {
  var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;

  checkAnswer(answerC);
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
  }

  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {
  if (answer == randomQuestion.rightAnswer) {
    btnProvideQuestion();
    adjustScore(true);
  } else {
    alert(
      `You Enter a Wrong Answer!! Correct Answer is:  ${randomQuestion.rightAnswer}`
    );

    btnProvideQuestion();
  }
}
