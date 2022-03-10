/**
 * Este archivo se va a ecargar de gestionar mi servios GET POST PUT DELETE
 */
const URL = "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies";

/**
 * Funcion para listar las peliculas
 */
const getMovies = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const storeMovie = async (movie) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    await response.json();
    // Falta limpiar los inputs
    document.querySelector("form").reset();

    Swal.fire({
      icon: "success",
      title: "",
      text: "Se crear la pelicula",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};
