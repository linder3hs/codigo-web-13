/**
 * Logica para el pokedex
 */

const pokemonContainer = document.querySelector("#row-pokemons");

// vamos a crear una funcion para obtener los datos
const obtenerPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();

  console.log(data.results);
  setPokemonsInView(data.results);
};

// vamos a crear a una funcion la cual se encargue de poder pintar nuestros pokemones
const setPokemonsInView = (results) => {
  results.map((result) => {
    // en cada interacion agrega un elemento
    const html = `
      <div class="col-md-3 mt-3">
        <div class='card'>
          <div class='card-body'>
            <h4>${result.name}</h4>
          </div>
        </div>
      </div>
    `;

    pokemonContainer.innerHTML += html;
  });
};

// llamamos a la funcion
obtenerPokemones();
