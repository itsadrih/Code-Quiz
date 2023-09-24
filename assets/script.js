const questions = [
    {
        question: "Which of these movies is not a horror movie?",
        choices: ["a. The Shinning", "b. Chucky", "c. The following", "d. The Little Mermaid"],
        answer: "d. The Little Mermaid"
    },
    {
        question: "Which of the following movies is the highest grossing film of all time?",
        choices: ["a. Avatar", "b. Avengers: End game", "c. The Titanic", "d. Jurrasic World"],
        answer: "a. Avatar"
    },
    {
        question: "Which was the first Disney princess movie?",
        choices: ["a. Cinderella", "b. Sleeping Beauty", "c. Snow White", "d. Beauty and the Beast"],
        answer: "c. Snow White"
    },
    {
        question: "Which actor did not star in The Hunger Games movie?",
        choices: ["a. Leonardo DiCaprio", "b. Jennifer Lawrence", "c. Josh Hutcherson", "d. Liam Hemsworth"],
        answer: "a. Leonardo DiCaprio"
    },
    {
        question: "Which movie came out in 1979?",
        choices: ["a. Star Wars: A New Hope", "b. The Godfather ", "c. Back to the future ", "d. Alien"],
        answer: "d. Alien"
    },
    {
        question: "Which Batman movie did Heath Ledger star in??",
        choices: ["a. The Batman ", "b. The Dark Knight ", "c. Batman & Robin", "d. Batman"],
        answer: "b. The Dark Knight"
    },
];


var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");


var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;




var totalTime = 151;
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};
function showQuiz() {
    nextQuestion();
}
function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        
        correctAns++;
       
        answerCheck.textContent = "Correct!";
    } else {
       
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The right answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }


function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

   
    finalScore.textContent = correctAns;
}


function storeHighScores(event) {
    event.preventDefault();

    if (initialInput.value === "") {
        alert("Please enter your Name!");
        return;
    } 

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
     

   
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    
       
       finalScore.textContent = correctAns;
    }
    
    
    
    startQuizBtn.addEventListener("click", newQuiz);
    choiceA.addEventListener("click", chooseA);
    choiceB.addEventListener("click", chooseB);
    choiceC.addEventListener("click", chooseC);
    choiceD.addEventListener("click", chooseD);
  
