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

  
};

// y otra funcion que se encargue de renderizar
