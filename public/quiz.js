var startBtn = document.querySelector(".start-btn"),
  nextBtn = document.querySelector(".next-btn"),
  questionElement = document.querySelector(".question"),
  answersContainer = document.querySelector(".q-container"),
  quizTitleElement = document.querySelector(".quiz-title"),
  correctCount = document.querySelector(".correct-count");
let currentQuestion = 0;
let correct = 0;

window.addEventListener("load", () => {
  quizTitleElement.innerHTML = quizData.title;
});

startBtn.addEventListener("click", () => {
  startQuiz();
});

nextBtn.addEventListener("click", () => {
  loadQuestion(currentQuestion);
});

function startQuiz() {
  startBtn.classList.add("hide");
  nextBtn.classList.remove("hide");
  questionElement.classList.remove("hide");
  answersContainer.classList.remove("hide");
  correctCount.classList.remove("hide");
  loadQuestion(currentQuestion);
}

function loadQuestion(questionNum) {
   if (currentQuestion === questions.length) {
     startBtn.classList.remove("hide");
     nextBtn.classList.add("hide");
     questionElement.classList.add("hide");
     answersContainer.classList.add("hide");
     startBtn.innerHTML = "Restart";
     let message = "";
     if (correct === questions.length) {
       message = "Congratulations! 🎉 You got all questions correct!";
     } else if (correct === 0) {
       message = "Oops! 😔 Better luck next time!";
     } else {
       message = "Well done! 👍 You completed the quiz!";
     }
     correctCount.innerHTML = `${message} Correct: ${correct}/${questions.length}`;

     correct = 0;
     currentQuestion = 0;
   } else {
     while (answersContainer.firstChild) {
       answersContainer.removeChild(answersContainer.firstChild);
     }
     answersContainer.dataset.type = null;
     questionElement.innerHTML = questions[questionNum].text;
     if (questions[questionNum].type === "mc") {
       var btnGrid = document.createElement("div");
       answersContainer.appendChild(btnGrid);
       questions[questionNum].answers.forEach((answer) => {
         var answerElement = document.createElement("button");
         btnGrid.classList.add("btn-grid");
         answerElement.innerHTML = answer.text;
         answerElement.dataset.correct = answer.correct;
         answerElement.addEventListener("click", (e) => {
           Array.from(btnGrid.children).forEach(
             (element) => (element.disabled = true)
           );
           e.target.dataset.clicked = "true";
           checkAnswer();
         });
         btnGrid.appendChild(answerElement);
       });
       answersContainer.dataset.type = "mc";
     }
     correctCount.innerHTML = `Correct: ${correct}`;
   }
}

function checkAnswer() {
  switch (answersContainer.dataset.type) {
    case "mc":
      Array.from(answersContainer.children[0].children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
          if (
            button.dataset.correct === "true" &&
            button.dataset.clicked === "true"
          ) {
            correct++;
          }
        } else {
          button.classList.add("wrong");
        }
      });
      currentQuestion++;
      break;
    default:
      return;
      break;
  }
}
