import { cleanPage } from "../../Utils/cleanPage";
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
};
/*    const pokeCont = document.createElement("div");
        app.appenChild(pokeCont); */

const printPokemon = (list) => {
  const app = document.querySelector("#app");
  const search = document.createElement("input");
  search.classList.add("buscador");
  app.appendChild(search);
  const searchbtn = document.createElement("button")
  searchbtn.classList.add("buscadorBtn");
  searchbtn.innerText = "Go";
  app.appendChild(searchbtn);
  const pokeCont = document.createElement("div");
  pokeCont.classList.add("pokeCont");
  app.appendChild(pokeCont);

  for (const item of list) {
    const template = `
         
        <div class="card">
          <h1>${item.name}</h1>
          <img src=${item.image} alt=${item.name}/>
          <h2>Tipo: ${item.type} || Exp: ${item.experience}</h2>
          </div>
        
          `;
    pokeCont.innerHTML += template;
  }
};
