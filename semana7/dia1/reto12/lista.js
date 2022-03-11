// como obtengo la lista de peliculas?

const tableContainer = document.querySelector("#table-container");

// boton para actualizar
const btnActualizar = document.querySelector("#btn-actualizar");

// inputs del modal
movieName = document.querySelector(".movie-name");
movieDirector = document.querySelector(".movie-director");
movieGender = document.querySelector(".movie-gender");
moviePhoto = document.querySelector(".movie-photo");
movieVideo = document.querySelector(".movie-video");

let idMovie = "";

//comentario de prueba
const getDataFromMovie = async (movieId) => {
  // cada vez que hagamos click en el boton editar vamos
  // a cambiar el valor de la variable idMovie por el movieId
  idMovie = movieId;
  const movie = await getMovieDetail(movieId);
  movieName.value = movie.name;
  movieDirector.value = movie.director;
  movieGender.value = movie.gender;
  moviePhoto.value = movie.wallpaper;
  movieVideo.value = movie.video_link;
};

btnActualizar.onclick = async function () {
  // primero debemos contruir nuestro objeto
  const movie = {
    name: movieName.value,
    director: movieDirector.value,
    wallpaper: moviePhoto.value,
    gender: movieGender.value,
    video_link: movieVideo.value,
  };
  await updateMovie(idMovie, movie);

  Swal.fire({
    icon: "success",
    title: "Todo bien",
    text: "Se actualizo la pelicula",
  });

  // vamos a actalizat la pagina despues de hacer el update
  window.location.reload();
};

const renderMovies = async () => {
  const movies = await getMovies();
  movies.map((movie) => {
    const html = `<tr id='row_${movie.id}'>
              <td>${movie.name}</td>
              <td>${movie.director}</td>
              <td>${movie.gender}</td>
              <td><a target="_blank" href=${movie.video_link}>Ver video</a> </td>
              <td>
                <div>
                  <button onclick="getDataFromMovie(${movie.id})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalMovie">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button onclick="deleteMoivie(${movie.id})" class="btn btn-danger">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>`;
    tableContainer.innerHTML += html;
  });
};

// vamos a crear una funcion que se encargue de eliminar las peliculas
const deleteMoivie = async (id) => {
  const result = await Swal.fire({
    title: "Venta #123465",
    text: "¿Eliminar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  });

  if (result.value) {
    await deleteItem(id);
    const row = document.querySelector(`#row_${id}`);
    row.remove();
    // window.location.reload();
  }
};

renderMovies();
