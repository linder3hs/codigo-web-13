// paso 1: Obtener el valor de inputs
const btnCrear = document.querySelector("#btn-crear");
const inputs = document.querySelectorAll("input");
const selectGender = document.querySelector("#select-gender");
// vamos a crear una variable la cual se encargue de almacenar el valor del onchange
// del select
let valueGender = "";

selectGender.onchange = function (event) {
  valueGender = event.target.value;
};

btnCrear.onclick = function (event) {
  // como evitamos que la pagina se recargue
  event.preventDefault();
  // al momento de dar click debo obtener el valor de los inputs
  const values = {};
  // Esto sirve para poder agregar un elemento a un objeto
  // values["key"] = "value"
  // values = {
  //  "key": "value"
  // }

  inputs.forEach((input) => {
    values[input.name] = input.value;
  });

  // para poder crear nuestro elemento en el API necesitamos armar un objeto
  // este objeto sera que el que enviaremos al API para que pueda crear una nueva pelicuala
  const movie = {
    name: values.movie_name,
    director: values.movie_director,
    wallpaper: values.movie_photo,
    gender: valueGender,
    video_link: values.movie_video,
  };

  console.log(movie);
};
