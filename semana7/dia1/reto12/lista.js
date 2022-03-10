// como obtengo la lista de peliculas?

const tableContainer = document.querySelector("#table-container");

const renderMovies = async () => {
  const movies = await getMovies();
  movies.map((movie) => {
    const html = ` <tr>
              <td>${movie.name}</td>
              <td>${movie.director}</td>
              <td>${movie.gender}</td>
              <td><a target="_blank" href=${movie.video_link}>Ver video</a> </td>
              <td>
                <div>
                  <button class="btn btn-warning">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn-danger">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>`;
    tableContainer.innerHTML += html;
  });
};

renderMovies();
