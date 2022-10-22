import "./LogPage.css";
import { menuPage } from "../MenuPage/MenuPage";



export const login = () => {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <div class="divlog">
    <div class="titulo">
    <h1>Games Hub</h1>
    </div>
    <label class="label" for="inputName">Introduce tu nombre</label>
    <input type="text" class="inputlog" id="inputName" required/>
    <button type="button" class="btnlog" id="savebtn">Ok!</button>
    <img class="marioGif" src="https://res.cloudinary.com/dghnwllrc/image/upload/v1666185708/mario_gif_facy0s.gif"/>
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