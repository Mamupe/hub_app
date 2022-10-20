import { cleanPage } from "../../Utils/cleanPage";
import { menuPage } from "../MenuPage/MenuPage";
import "./PokePage.css";

export const getPokemon = async (i) => {
  const app = document.querySelector("#app");
  cleanPage(app);
  let pokemonarray = [];
  for (let i = 1; i < 151; i++) {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      const jsonData = await data.json();
      pokemonarray.push(jsonData);
    } catch (error) {
      console.log(error);
    }
  }
  transformData(pokemonarray);
  
};
let pokeSelec;
const transformData = (list) => {
  const mappedPokemon = list.map((item) => ({
    id: item.id,
    name: item.name,
    height: item.height,
    weight: item.weight,
    image: item.sprites.other.dream_world.front_default,
    image2: item.sprites.other.home.front_female,
    experience: item.base_experience,
    type: item.types[0].type.name,
  }));
  //console.log(mappedPokemon);
  printPokemon(mappedPokemon);
  pokeSelec = mappedPokemon;

};


const printPokemon = (list) => {
  const app = document.querySelector("#app");
  const search = document.createElement("input");
  search.classList.add("buscador");
  app.appendChild(search);


  /* app.appendChild(saludo); */
  const searchbtn = document.createElement("button")
  searchbtn.classList.add("buscadorBtn");
  searchbtn.innerText = "<<<Back";
  app.appendChild(searchbtn);
  const pokeCont = document.createElement("div");
  pokeCont.classList.add("pokeCont");
  app.appendChild(pokeCont);

  for (const item of list) {
   
    const template = `
         
        <div id="pokeCard" class="${item.type}">
          <h1>${item.name}</h1>
          <img src=${item.image} alt=${item.name}/>
          <h2>Tipo: ${item.type} || Exp: ${item.experience}<br>
          Pes: ${item.weight} || Alt: ${item.height}
          </h2>
          </div>
        
          `;
    pokeCont.innerHTML += template;
  };
  
  const pokebusca = document.querySelector(".buscador");
  const pokesFilter = (word) => {
      const pokeFilter = pokeSelec.filter((item) =>{
          return item.name.toLowerCase().includes(word.toLowerCase())
      });
      cleanPage(pokeCont);
  
      for (const item of pokeFilter) {
          pokeCont.innerHTML += `
          <div id="pokeCard" class="${item.type}">
          <h1>${item.name}</h1>
          <img src=${item.image} alt=${item.name}/>
          <h2>Tipo: ${item.type} || Exp: ${item.experience}<br>
          Pes: ${item.weight} || Alt: ${item.height}
          </h2>
          </div>
        
          `;
      }
      return pokeFilter
  };
  
  pokebusca.addEventListener("input", (ev)=> pokesFilter(pokebusca.value)) 

const bacToMenu = document.querySelector(".buscadorBtn");
bacToMenu.addEventListener("click", () => menuPage());

};




