import "./LogPage.css";
import { menuPage } from "../MenuPage/MenuPage";
export const login = () => {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <div class="divlog">
    <h1>GAMES HUB</h1>
    <label for="inputName">Introduce tu nombre</label>
    <input type="text" id="inputName" required/>
    <button type="button" id="savebtn">Ok!</button>
    </div>
    `;
  const saveLocalName = () => {
    localStorage.setItem("name", input.value);
    menuPage();

    
  };
  const savebtn = document.querySelector("#savebtn");
  const input = document.querySelector("input");
  savebtn.addEventListener("click", () => saveLocalName(input.value));
  //
};














      /*   if(typeof value !== "string") {
        const welcome = document.createElement("p");
        welcome.innerText = `${value} No es un nombre`;
        app.div.appendChild(welcome);
    } else if (value.length < 1){
      const welcome = document.createElement("p");
      welcome.innerText = `Introduce un nombre`;
      app.div.appendChild(welcome);
    } else {

    }  */