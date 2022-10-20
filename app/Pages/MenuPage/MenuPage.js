import { cleanPage } from "../../Utils/cleanPage";
import "./MenuPage.css";
import { getPokemon } from "../PokePage/PokePage";
export const menuPage = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
  <h2 class="bienve">Bienvenido ${localStorage.name}</h2>
  <div class="divhub">
  
  <div class="pokediv">
  <button type="button" class="pokebtn" id="pokebtn"><img src="https://res.cloudinary.com/dghnwllrc/image/upload/v1666096687/pokemon-logo-png-1446_gx5vzd.jpg" class="imgpok"/></button>
  
  <h3>Pokeapi</h3>
  </div>

  </div>
  `;
  const pokebtn = document.querySelector("#pokebtn");
  pokebtn.addEventListener("click", () => getPokemon())
};
