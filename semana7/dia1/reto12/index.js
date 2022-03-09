// como consumo el API?
const URL = "https://6226bedf2dfa5240180c3e36.mockapi.io/fiction_movies";

const getMovies = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// haremos una funcion que se encargue de agrupar las pelicualas
const groupMovies = async () => {
  // podemos crear 3 arreglos
  // arreglo 1 para las peliculas de marvel
  // arreglo 2 para las peliculas de DC
  // arreglo 3 para las peliculas ramdon
  const marvelMovies = [];
  const dcMovies = [];
  const ramdonMovies = [];

  // vamos a obtener el arreglo de pelicuas desde la funcion getMovies()
  const movies = await getMovies();

  movies.forEach((movie) => {
    // compo podemos extraer el gener si usamos destructuracion?
    const { gender } = movie;
    if (gender === "Marvel") {
      marvelMovies.push(movie);
    } else if (gender === "DC") {
      dcMovies.push(movie);
    } else {
      ramdonMovies.push(movie);
    }
  });

  renderMovies(marvelMovies, "Marvel");
  renderMovies(dcMovies, "DC");
  renderMovies(ramdonMovies, "Ramdon");
};

// y otra funcion que se encargue de renderizar
const containerMovies = document.querySelector("#container-videos");

const renderMovies = (arregloPeliculas, titulo) => {
  const html = `
    <div class="col-md-12 mt-3">
        <h4 class="gender-movie">${titulo}</h4>
        <div class="row">
        ${arregloPeliculas.map(
          (pelicula) =>
            `<div class="col-md-3">
            <video controls muted poster=${pelicula.wallpaper} class="video">
              <source src=${pelicula.video_link} />
            </video>
            <h5 class="title">${pelicula.name}</h5>
            <p class="subtitle">${pelicula.director}</p>
          </div>`
        )}
        </div>
    </div>
      `;

  containerMovies.innerHTML += html;
};

groupMovies();
