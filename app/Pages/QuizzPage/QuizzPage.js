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
  divQuiz.classList.add("container")
  app.appendChild(divQuiz);
  divQuiz.innerHTML = `
  
  <div id="preguntas-container" class="hide">
    <div id="pregunta" class="pregunta">Pregunta</div>
    <div id="respButtons" class="respButtons">
      <button class="btn">Respuesta 1</button>
      <button class="btn">Respuesta 2</button>
      <button class="btn">Respuesta 3</button>
      <button class="btn">Respuesta 4</button>
    </div>
  </div>
  <div class="controles">
    <button id="inicioBtn" class="inicioBtn">Inicio</button>
    <button id="sigBtn" class="sigBtn hide">Siguiente</button>
  </div>

      
    `;

    const inicio = document.getElementById('inicioBtn')
    const siguiente = document.getElementById('sigBtn')
    const pregContainerElement = document.getElementById('preguntas-container')
    const pregElement = document.getElementById('pregunta')
    const respButtons = document.getElementById('respButtons')
    
    let preguntasBaraja, preguntasIndex
    
    inicio.addEventListener('click', startGame)
    siguiente.addEventListener('click', () => {
        preguntasIndex++
      sigPregunta()
    })
    
    function startGame() {
        inicio.classList.add('hide')
        preguntasBaraja = questions.sort(() => Math.random() - .5)
        preguntasIndex = 0
        pregContainerElement.classList.remove('hide')
      sigPregunta()
    }
    
    function sigPregunta() {
      resetState()
      showPregunta(preguntasBaraja[preguntasIndex])
    }
    
    function showPregunta(pregunta) {
        pregElement.innerText = pregunta.pregunta
      pregunta.respuestas.forEach(respuesta => {
        const button = document.createElement('button')
        button.innerText = respuesta.text
        button.classList.add('btn')
        if (respuesta.correcta) {
          button.dataset.correcta = respuesta.correcta
        }
        button.addEventListener('click', selectResp)
        respButtons.appendChild(button)
      })
    }
    
    function resetState() {
      clearStatusClass(document.divQuiz)
      siguiente.classList.add('hide')
      while (respButtons.firstChild) {
        respButtons.removeChild(respButtons.firstChild)
      }
    }
    
    function selectResp(e) {
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      setStatusClass(document.divQuiz, correct)
      Array.from(respButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
      })
      if (preguntasBaraja.length > preguntasIndex + 1) {
        siguiente.classList.remove('hide')
      } else {
        inicio.innerText = 'Restart'
        inicio.classList.remove('hide')
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
        question: 'What is 2 + 2?',
        answers: [
          { text: '4', correct: true },
          { text: '22', correct: false }
        ]
      },
      {
        question: 'Who is the best YouTuber?',
        answers: [
          { text: 'Web Dev Simplified', correct: true },
          { text: 'Traversy Media', correct: true },
          { text: 'Dev Ed', correct: true },
          { text: 'Fun Fun Function', correct: true }
        ]
      },
      {
        question: 'Is web development fun?',
        answers: [
          { text: 'Kinda', correct: false },
          { text: 'YES!!!', correct: true },
          { text: 'Um no', correct: false },
          { text: 'IDK', correct: false }
        ]
      },
      {
        question: 'What is 4 * 2?',
        answers: [
          { text: '6', correct: false },
          { text: '8', correct: true }
        ]
      }
    ]








    const bacToMenu = document.querySelector(".backBtn");
  bacToMenu.addEventListener("click", () => menuPage());
};
