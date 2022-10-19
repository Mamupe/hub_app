import { cleanPage } from "../../Utils/cleanPage";


export const getPokemon = async (i) => {
  const app = document.querySelector("#app")
  cleanPage(app)
  let pokemonarray = [];
    for (let i = 1; i < 151; i++) {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const jsonData = await data.json();
        pokemonarray.push(jsonData);
      
    } catch (error) {
    console.log(error)
    }
}
transformData(pokemonarray)
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
      console.log(mappedPokemon);
      //printPokemon(mappedPokemon);

    };
/*     const printPokemon = (list) => {
         const app = document.querySelector("#app");
      
        for (let i = 1; i < 151; i++) {
          const item = list[i]; 
          const template = `
          <figure>
          <h2>${item.name} - ${item.type}</h2>
          <img src=${item.image} alt=${item.name}/>
          <h3>${item.experience}</h3>
          </figure>
          `;
          app.innerHTML += template;
        }
      };

getPokemon(); */






