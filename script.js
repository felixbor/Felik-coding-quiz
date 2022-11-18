var timer = document.getElementById('timer');
var start = document.getElementById('start');
var question = document.getElementById('question');
var info = document.getElementById("info");
var tryagain = document.getElementById('tryagain');
var quizsection = document.querySelector("#hide"); 
var entername = document.querySelector("#name");
var inputname = document.querySelector("input");
var btn = document.querySelector("button");
var flscore = document.getElementById('fscore');
var textscore =document.getElementById('textscore');
var score = 0

start.addEventListener("click", startquiz);
var message = "Game is over";

var secondsLeft = 60;
var index = 0;

let timerdown;

function startquiz() {
tryagain.setAttribute("style", "display: none")
  start.setAttribute("style", "display:none;");
  info.setAttribute("style", "display:none;");
  quizsection.setAttribute("style", "display:block;");

  timerdown = setInterval(() => {
    secondsLeft--;
    timer.innerHTML = secondsLeft + " seconds left till the game ends.";
    if (secondsLeft <= 0) {
      endgame()
    }

  }, 1000)
  displayquestion();
}

function displayquestion() {
var answerBtn = document.querySelectorAll(".button")

  answerBtn.forEach((btn) => {
    btn.removeAttribute("style")
})

  question.innerHTML = questions[index].question;
  answer1.textContent = questions[index].answer[0].text;
  answer2.textContent = questions[index].answer[1].text;
  answer3.textContent = questions[index].answer[2].text;
  answer4.textContent = questions[index].answer[3].text;
}

function endgame() {
  clearInterval(timerdown);
  timer.innerHTML = message;
  timer.setAttribute("style", "font-size: 30px; color: antiquewhite;");
  quizsection.setAttribute("style", "display: none;");
  entername.setAttribute("style", "display:inline-block;");
  inputname.setAttribute("style", "display: inline-block;");
  flscore.setAttribute("style", "display: inline-block;");
  textscore.setAttribute("style", "display: inline-block;");
  flscore.innerHTML = score;
  secondsLeft = 60;
  index = 0;
  score =0;


}
function selectanswer(event) {

  var chosenChoice = event.target.textContent
  var answers = questions[index].answer

  for (var i = 0; i < answers.length; i++) {
    if (chosenChoice == answers[i].text) {
      var trueOrFalse = answers[i].correct;
      if (trueOrFalse == true) { 
     event.target.setAttribute("style","background-color: green; ")
     score += 20;
      } else {
        event.target.setAttribute("style","background-color: red; ")
        secondsLeft -= 10;
      }
    }
  }

  index++;

  if (index == questions.length) {
    endgame();
  } else {

 setTimeout(displayquestion,1000)

  }
 console.log(score)
}
entername.addEventListener("click", getinfo)
function getinfo() {
  var inputvalue = document.getElementById("inputvalue").value
  var userobject =[ {
    name: inputvalue,
    score: score
  }]
  window.localStorage.setItem('userdata', JSON.stringify(userobject));
  reloadPage();
 
}
 function reloadPage(){
  tryagain.setAttribute("style", "display: inline-block")
  entername.removeAttribute("style");
  inputname.removeAttribute("style", )
  flscore.setAttribute("style", "display: none;");
  textscore.setAttribute("style", "display: none;");

  tryagain.addEventListener("click", 
  startquiz)

  
 }
let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false },
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
    ]
  },

  {
    question: " What is JS ?",

    answer: [
      { text: "programming language Java Script ", correct: true },
      { text: "programming language Java Secret", correct: false },
      { text: "another name of Java", correct: false },
      { text: "Java selector", correct: false },
    ]
  },
  {
    question: "What is JSON?",
    answer: [
      { text: "JavaScript Object Notation (JSON)", correct: true },
      { text: "Java-SON corpotation", correct: false },
      { text: "Java screen object name", correct: false },
      { text: "Java script object notification", correct: false },
    ]
  },
  {
    question: "What is HTML?",
    answer: [
      { text: " standard markup language for Web pages", correct: true },
      { text: "coding language", correct: false },
      { text: "world known web host", correct: false },
      { text: " Hyper Time Magic Loop", correct: false },
    ]
  },
  {
    question: "What is CSS?",
    answer: [
      { text: "cascading style system", correct: true },
      { text: "correct style sheet", correct: false },
      { text: "coding secret system", correct: false },
      { text: "command style solution", correct: false },
    ]
  }]
