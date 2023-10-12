
const container1 = document.querySelector(".contenedor-1");
const antes = document.querySelector(".antes"); 
const siguiente = document.querySelector(".siguiente"); 

let offset = 1;
let limited = 8;

antes.addEventListener("click", () => {

if(offset != 1) {
offset -=9; 
buclePokemon(offset, limited); 
}}); 

siguiente.addEventListener("click", ()=> {
  offset +=9; 
 buclePokemon(offset, limited);
})



function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      crearContenedorPokemon(data);
    });
}

function buclePokemon(offset, limited) {
const pokemonPromises = [];
  
for (let i = offset; i <= offset + limited; i++) {
const promise = getPokemon(i);
pokemonPromises.push(promise);
    }
  
    Promise.all(pokemonPromises)
      .then(pokemonData => {
  
        pokemonData.sort((a, b) => a.id - b.id);
 
        pokemonData.forEach(pokemon => {
          crearContenedorPokemon(pokemon);
        });
      })
      .catch(error => console.error('Error al obtener datos de Pokémon:', error));
  }
  

function crearContenedorPokemon(pokemon) {
  const card = document.createElement('div');
  card.classList.add("contenedor-1");

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add("contenedor-sprite");

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const numero = document.createElement('p');
  numero.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;

  const nombre = document.createElement('p');
  nombre.classList.add("nombre-de-pokemon");
  nombre.textContent = pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(numero);
  card.appendChild(nombre);

  container1.appendChild(card);
}

buclePokemon(offset,limited);
