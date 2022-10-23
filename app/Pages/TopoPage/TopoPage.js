import "./TopoPage.css"
import { menuPage } from "../MenuPage/MenuPage";
import { cleanPage } from "../../Utils/cleanPage";
import { Title } from "../../Utils/Title";
export const topoPage = () => {
const app = document.querySelector("#app");
cleanPage(app);
app.innerHTML = ` <h2 class="bienven">Bienvenido a Topo Game, ${localStorage.name}</h2>`;
const backbtn = document.createElement("button");
backbtn.classList.add("backBtn");
backbtn.innerText = "<<<Back";
app.appendChild(backbtn);
const topoDiv = document.createElement("div");
topoDiv.classList.add("topoContainer")
app.appendChild(topoDiv);
topoDiv.innerHTML = `
<div class="interface">
    ${Title("Topo Game", 1)}
    <span class="score">0</span>
    <button id="startGame">Start!</button>
</div>
<div class="game">
    <div class="hole hole1">
         <div class="mole"></div>
    </div>
    <div class="hole hole2">
         <div class="mole"></div>
    </div>
    <div class="hole hole3">
         <div class="mole"></div>
    </div>
    <div class="hole hole4">
         <div class="mole"></div>
    </div>
    <div class="hole hole5">
         <div class="mole"></div>
    </div>
    <div class="hole hole6">
         <div class="mole"></div>
    </div>
</div>
`;



let lastHole;
let timeUp = false;
let score = 0;


const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomHole = () => {
  const index = Math.floor(
    Math.random() * document.querySelectorAll(".hole").length
  );
  const hole = document.querySelectorAll(".hole")[index];


  if (hole === lastHole) {
    return randomHole(document.querySelectorAll(".hole"));
  }
  lastHole = hole;
  return hole;
};


const showMole = () => {
 
  const time = randomTime(500, 1100);
  const hole = randomHole(document.querySelectorAll(".hole"));

  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    
    if (!timeUp) {
      showMole();
    }
  }, time);
};


const startGame = () => {
  timeUp = false;
  score = 0;
  showMole();

  setTimeout(() => (timeUp = true), 20000);
};

const wack = (ev) => {

  if (!ev.isTrusted) return;
  score++;
  ev.target.parentNode.classList.remove("up");

  document.querySelector(".score").textContent = score;
};



const addListener = () => {
  document
    .querySelectorAll(".mole")
    .forEach((mole) => mole.addEventListener("click", (ev) => wack(ev)));

  document.querySelector("#startGame").addEventListener("click", startGame);
};
addListener();





const bacToMenu = document.querySelector(".backBtn");
bacToMenu.addEventListener("click", () => menuPage());
}