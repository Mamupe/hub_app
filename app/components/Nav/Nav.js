import "./Nav.css"
import { randomColor } from "../../Utils/randomcolor.js";
export const changeColor = () => {
  const themeBtn = document.createElement("button");
  themeBtn.innerText = "changecolor";
  const header = document.querySelector("header")
  header.appendChild(themeBtn);
  themeBtn.addEventListener("click", randomColor); 

};

