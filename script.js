var timer = document.getElementById('timer');
var start = document.getElementById('start');
var question = document.getElementById('question');
var info = document.getElementById("info");
var answer1 =document.getElementById("answer1");
var answer2 =document.getElementById("answer2");
var answer3 =document.getElementById("answer3");
var answer4 =document.getElementById("answer4");
var quizsection=document.querySelector("#hide");
var entername=document.querySelector(".hidebtn");
var input =document.querySelector("input")

var score="";
start.addEventListener("click", startquiz);
var message ="Game is over";
var secondsLeft = 5;

 function  startquiz()
 { 
    
    start.setAttribute("style", "display:none;");
    info.setAttribute("style", "display:none;");
    quizsection.setAttribute("style", "display:block;");
    
    let timerdown =setInterval(() => {
        secondsLeft--;
        timer.innerHTML = secondsLeft + " seconds left till the game ends.";
        if(secondsLeft === 0) {
          clearInterval(timerdown);
          timer.innerHTML = message;
         quizsection.setAttribute("style", "display: none;");
         entername.setAttribute("style", "display:inline-block;");
         input.setAttribute("style", "display: inline-block;");
         
        }
    
      }, 1000);
     displayquestion();  
 }
 
  function displayquestion (){
    question.innerHTML= questions[0].question;
    answer1.innerHTML = questions[0].answer[0].text;
    answer2.innerHTML = questions[0].answer[1].text;
    answer3.innerHTML = questions[0].answer[2].text;
    answer4.innerHTML = questions[0].answer[3].text;
     console.log(questions[0].answer[0].text); 
     console.log(questions[0].answer[1].text); 
     console.log(questions[0].answer[2].text); 
     console.log(questions[0].answer[3].text);
  }

let questions = [
    {
    question: "Inside which HTML element do we put the JavaScript?",
    answer:[
    {text: "<script>", correct: true },
    {text: "<scripting>", correct: false  },
    {text: "<js>", correct: false },
    {text: "<javascript>", correct: false   },
   ]}, 

   {
    question: " What is JS ?",  

    answer:[
    {text: "programming language Java Script ", correct: true },
    {text: "programming language Java Secret", correct: false  },
    {text: "another name of Java", correct: false },
    {text: "Java selector", correct: false   },
   ]}, 
   {
    question: "What is JSON?",
    answer:[
    {text: "JavaScript Object Notation (JSON)", correct: true },
    {text: "Java-SON corpotation", correct: false  },
    {text: "Java screen object name", correct: false },
    {text: "Java script object notification", correct: false   },
   ]}, 
   {
    question: "What is HTML?",
    answer:[
    {text: " standard markup language for Web pages", correct: true },
    {text: "coding language", correct: false  },
    {text: "world known web host", correct: false },
    {text: " Hyper Time Magic Loop", correct: false   },
   ]}, 
   {
    question: "What is CSS?",
    answer:[
    {text: "cascading style system", correct: true },
    {text: "correct style sheet", correct: false  },
    {text: "coding secret system", correct: false },
    {text: "command style solution", correct: false   },
   ]} ]
