var questionOne = {
    questionPrompt: "Which of these is a Boolean value?",
    choiceOne:"20", 
    choiceTwo:"True", 
    choiceThree: "Array",
    choiceFour:"'Hello'",
    correctValue: 2};

var questionTwo = {
    questionPrompt: "Commonly used data types do not include",
    choiceOne:"Numbers", 
    choiceTwo:"Booleans", 
    choiceThree: "Strings",
    choiceFour:"Alerts",
    correctValue: 4};

var questionThree = {
    questionPrompt: "The condition of an if/else statement is enclosed in",
    choiceOne:"{}", 
    choiceTwo:"()", 
    choiceThree: "''",
    choiceFour:"[]",
    correctValue: 2};

var questionFour = {
    questionPrompt: "Arrays can store",
    choiceOne:"All of the above", 
    choiceTwo:"Numbers", 
    choiceThree: "Objects",
    choiceFour:"Strings",
    correctValue: 1};

var questionOptions = [questionOne, questionTwo, questionThree, questionFour];
var questionObject = questionOptions[0];

var secondsLeft = 50;
var score = 0;


function evalAnswer (question, submission) {
    if (question.correctValue == submission) {
        return true;
    } else {
        return false;
    }
}

function reloadQuestions () {
    $('#quizQuestion').text(questionObject.questionPrompt);
    $('#choiceOne').text(questionObject.choiceOne);
    $('#choiceTwo').text(questionObject.choiceTwo);
    $('#choiceThree').text(questionObject.choiceThree);
    $('#choiceFour').text(questionObject.choiceFour);
    return questionOptions.indexOf(questionObject);
}

function saveScore (value) {
    localStorage.setItem("score", value)
}

$('#submissionButton').on('click', function () {
    if (evalAnswer(questionOptions[reloadQuestions()], $('#answerDropDown').val())) {
        score = score + 5;
        saveScore(score);

    } else {
        secondsLeft = secondsLeft - 5;

    }

    $('#score').text(`Score: ${score}`);

    if (questionOptions.indexOf(questionObject) == 3) {
        saveInitials();
        return
    }
    questionObject = questionOptions[questionOptions.indexOf(questionObject) + 1];
    reloadQuestions();
});

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      $('#timer').text(`Time Remaining: ${secondsLeft}`);
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        saveScore(score);
        saveInitials();
      }
  
    }, 1000);
  }

function saveInitials () {
    localStorage.setItem("initials", window.prompt("Enter your initials"));
    window.location.href="assets/high-scores.html";
}


window.alert("Click continue to start the quiz.");
reloadQuestions();
setTime();
