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
  app.appendChild(divQuiz);
  divQuiz.innerHTML = `
    <p>hola</p>
    `;

    const bacToMenu = document.querySelector(".backBtn");
  bacToMenu.addEventListener("click", () => menuPage());
};
