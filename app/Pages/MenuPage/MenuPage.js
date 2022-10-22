
import { cleanPage } from "../../Utils/cleanPage";
import "./MenuPage.css";
import { getPokemon } from "../PokePage/PokePage";
import { quizPage } from "../QuizzPage/QuizzPage";
import { topoPage } from "../TopoPage/TopoPage";
export const menuPage = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
  <h2 class="bienve">Bienvenido ${localStorage.name}</h2>
  <div class="divhub">
  
  <div class="pokediv">
  <button type="button" class="pokebtn" id="pokebtn"></button>
  <h3>Pokeapi</h3>
  </div>

  <div class="quizDiv">
  <button type="button" class="quizbtn" id="quizbtn"></button>
  <h3>Quiz Game</h3>
  </div>

  <div class="topoDiv">
  <button type="button" class="topoBtn" id="topoBtn"></button>
  <h3>Topo Game</h3>
  </div>

  </div>
  `;
  const pokebtn = document.querySelector("#pokebtn");
  pokebtn.addEventListener("click", () => getPokemon());
  const quizbtn = document.querySelector("#quizbtn");
  quizbtn.addEventListener("click", () => quizPage());
  const topoBtn = document.querySelector("#topoBtn");
  topoBtn.addEventListener("click", () => topoPage());
};
