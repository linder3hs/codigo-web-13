// como obtengo la lista de peliculas?

const tableContainer = document.querySelector("#table-container");

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
                  <button class="btn btn-warning">
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
