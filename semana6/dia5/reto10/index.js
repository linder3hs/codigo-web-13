const containerElements = document.querySelector("#container-elements");

const obtenerData = async () => {
  const reponse = await fetch("https://rickandmortyapi.com/api/character");
  const data = await reponse.json();
  renderData(data.results);
};

const showDetail = async (characterUrl) => {
  // console.log(character);
  const url = "/semana6/dia5/reto10/detalle.html";

  const response = await fetch(characterUrl);
  const data = await response.json();

  // como poder guardar un objeto en localStorage
  // JSON.Stringfy => Permite parsear un JSON a un string
  // de esta formar podemos guardar un objeto en localStorage
  // localStorage.setItem("img", data.image);
  localStorage.setItem("character", JSON.stringify(data));

  window.location.href = url;
};

const renderData = (data) => {
  data.map((character) => {
    const html = `
    <div class="col-md-3 mb-5">
          <div class="card link" onclick="showDetail('${character.url}')">
            <div
              class="card-body card-custom-body"
              style="
                background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.3),
                    rgba(0, 0, 0, 0.3)
                  ),
                  url(${character.image});
              "
            >
              <span class="badge bg-success">${character.status}</span>
              <h4 class="text-white mt-2">${character.name}</h4>
              <div class="d-flex justify-content-between w-100 text-white">
                <div>
                  <span
                    ><i class="fa-solid fa-earth-americas"></i>&nbsp;${character.origin.name}</span
                  >
                </div>
                <div>
                  <span><i class="fa-solid fa-clapperboard"></i>&nbsp;${character.episode.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

    containerElements.innerHTML += html;
  });
};

obtenerData();
