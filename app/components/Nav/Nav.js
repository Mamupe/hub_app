import "./Nav.css"
import { randomColor } from "../../Utils/randomcolor.js";
import { login } from "../../Pages/LogPage/LogPage";
export const changeColor = () => {
  const themeBtn = document.createElement("button");
  themeBtn.innerText = "Color🌈";
  const header = document.querySelector("header")
  header.appendChild(themeBtn);
  themeBtn.addEventListener("click", randomColor); 

};

export const logout = () => {
  const logoutBtn = document.createElement("button");
  logoutBtn.innerText = "Logout";
  const header = document.querySelector("header")
  header.appendChild(logoutBtn);
  logoutBtn.addEventListener("click", () => login());
}
