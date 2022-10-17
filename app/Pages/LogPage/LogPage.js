export const login = () => {
    const divLog = document.createElement("div");
    divLog.setAttribute("id", "divlog")
    document.body.appendChild(divLog);
    divLog.innerHTML = `
    <h1>Juegos</h1>
    <label for="inputName">Introduce tu nombre</label>
    <input type="text" id="inputName" required/>
    <button id="savebtn">Ok!</button>
    `
const saveLocalName = (value) => {
    
    localStorage.setItem("name", value);


};
const input = document.querySelector("input");
savebtn.addEventListener("click", () => saveLocalName(input.value));
};

