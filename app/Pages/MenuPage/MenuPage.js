import { cleanPage } from "../../Utils/cleanPage";
import "./MenuPage.css";
export const menuPage = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
  <div class="divhub">
  <p>Bienvenido ${localStorage.name}</p>
  <div class="pokediv">
  <button type="button" class="pokebtn" ><img src="https://res.cloudinary.com/dghnwllrc/image/upload/v1666096687/pokemon-logo-png-1446_gx5vzd.jpg" class="imgpok"/></button>
  
  <h3>Pokeapi</h3>
  </div>

  </div>
  `;
};
