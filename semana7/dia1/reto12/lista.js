// como obtengo la lista de peliculas?

const tableContainer = document.querySelector("#table-container");

const renderMovies = async () => {
  const movies = await getMovies();
  movies.map((movie) => {
    const html = `<tr>
              <td>${movie.name}</td>
              <td>${movie.director}</td>
              <td>${movie.gender}</td>
              <td><a target="_blank" href=${movie.video_link}>Ver video</a> </td>
              <td>
                <div>
                  <button class="btn btn-warning">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button onclick="deleteMoivies()" class="btn btn-danger">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>`;
    tableContainer.innerHTML += html;
  });
};

// vamos a crear una funcion que se encargue de eliminar las peliculas
const deleteMoivies = async () => {
  Swal.fire({
    title: "Venta #123465",
    text: "¿Eliminar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((resultado) => {
    if (resultado.value) {
      // Hicieron click en "Sí"
      console.log("*se elimina la venta*");
    } else {
      // Dijeron que no
      console.log("*NO se elimina la venta*");
    }
  });
};

renderMovies();
