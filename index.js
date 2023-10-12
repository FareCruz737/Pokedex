
const container1 = document.querySelector(".contenedor-1");

function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      crearContenedorPokemon(data);
    });
}

function buclePokemon(number) {
  for (let i = 1; i <= number; i++) {
    getPokemon(i);
  }
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

buclePokemon(100);
