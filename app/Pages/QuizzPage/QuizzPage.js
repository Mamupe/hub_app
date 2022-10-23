import "./QuizzPage.css"
import { menuPage } from "../MenuPage/MenuPage";
import { cleanPage } from "../../Utils/cleanPage";
export const quizPage = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = ` <h2 class="bienven">Bienvenido a Quiz de geografía, ${localStorage.name}</h2>`;
  const backbtn = document.createElement("button");
  backbtn.classList.add("backBtn");
  backbtn.innerText = "<<<Back";
  app.appendChild(backbtn);
  const divQuiz = document.createElement("div");
  divQuiz.classList.add("qGame")
  app.appendChild(divQuiz);
  divQuiz.innerHTML = `
  
  <div class="container">
  <div id="question-container" class="hide">
    <div id="question" class="Question">Question</div>
    <div id="answer-buttons" class="btn-grid">
      <button class="btn">Answer 1</button>
      <button class="btn">Answer 2</button>
      <button class="btn">Answer 3</button>
      <button class="btn">Answer 4</button>
    </div>
  </div>
  <div class="controls">
    <button id="start-btn" class="start-btn btn">Inicio</button>
    <button id="next-btn" class="next-btn btn hide">Siguiente</button>
  </div>
  </div>

      
    `;

    const startButton = document.getElementById('start-btn')
    const nextButton = document.getElementById('next-btn')
    const questionContainerElement = document.getElementById('question-container')
    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById('answer-buttons')
    
    let shuffledQuestions, currentQuestionIndex
    
    startButton.addEventListener('click', startGame)
    nextButton.addEventListener('click', () => {
      currentQuestionIndex++
      setNextQuestion()
    })
    
    function startGame() {
      startButton.classList.add('hide')
      shuffledQuestions = questions.sort(() => Math.random() - .5
      )
      currentQuestionIndex = 0
      questionContainerElement.classList.remove('hide')
      setNextQuestion()
    }
    
    function setNextQuestion() {
      resetState()
      showQuestion(shuffledQuestions[currentQuestionIndex])
    }
    
    function showQuestion(question) {
      questionElement.innerText = question.question
      question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
      })
    }
    
    function resetState() {
      clearStatusClass(document.body)
      nextButton.classList.add('hide')
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
      }
    }
    
    function selectAnswer(e) {
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      setStatusClass(document.body, correct)
      Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
      })
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
      }
    }
    
    function setStatusClass(element, correct) {
      clearStatusClass(element)
      if (correct) {
        element.classList.add('correct')
      } else {
        element.classList.add('wrong')
      }
    }
    
    function clearStatusClass(element) {
      element.classList.remove('correct')
      element.classList.remove('wrong')
    }
    
    const questions = [
      {
        question: '¿Cuál es el río mas largo de España?',
        answers: [
          { text: 'Ebro', correct: true },
          { text: 'Tajo', correct: false },
          { text: 'Duero', correct: false },
          { text: 'Guadiana', correct: false }
        ]
      },
      {
        question: '¿Cuál de estos picos es el más alto?',
        answers: [
          { text: 'Mont Blanc', correct: false },
          { text: 'Teide', correct: false },
          { text: 'Kilimanjaro', correct: false },
          { text: 'Aconcagua', correct: true }
        ]
      },
      {
        question: '¿Qué país no está en Asia?',
        answers: [
          { text: 'Yemen', correct: false },
          { text: 'Surinam', correct: true },
          { text: 'Birmania', correct: false },
          { text: 'Líbano', correct: false }
        ]
      },
      {
        question: 'Capital de Rumanía',
        answers: [
          { text: 'Sofía', correct: false },
          { text: 'Bucarest', correct: true },
          { text: 'Budapest', correct: false },
          { text: 'Sarajevo', correct: false }
        ]
      },
      {
        question: '¿Qué océano es el más extenso?',
        answers: [
          { text: 'Pácifico', correct: true },
          { text: 'Atlántico', correct: false },
          { text: 'Índico', correct: false },
          { text: 'Ártico', correct: false }
        ]
      }, 
      {
        question: '¿Cuál es el estado mas grande de EEUU?',
        answers: [
          { text: 'California', correct: false },
          { text: 'Nevada', correct: false },
          { text: 'Texas', correct: false },
          { text: 'Alaska', correct: true }
        ]
      }, 
      {
        question: '¿Qué canal une el mar Mediterráneo con el mar Rojo?',
        answers: [
          { text: 'Plus', correct: false },
          { text: 'Gibraltar', correct: false },
          { text: 'Suez', correct: true },
          { text: 'Seth', correct: false }
        ]
      }
    ]








    const bacToMenu = document.querySelector(".backBtn");
  bacToMenu.addEventListener("click", () => menuPage());
};
