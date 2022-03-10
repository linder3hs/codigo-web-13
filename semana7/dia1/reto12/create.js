// paso 1: Obtener el valor de inputs
const btnCrear = document.querySelector("#btn-crear");
const inputs = document.querySelectorAll("input");
const selectGender = document.querySelector("#select-gender");
const URL = "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies";
// vamos a crear una variable la cual se encargue de almacenar el valor del onchange
// del select
let valueGender = "";

selectGender.onchange = function (event) {
  valueGender = event.target.value;
};

btnCrear.onclick = async function (event) {
  // como evitamos que la pagina se recargue
  event.preventDefault();
  selectGender.style.border = "1px solid #ccc";
  // al momento de dar click debo obtener el valor de los inputs
  const values = {};
  // Esto sirve para poder agregar un elemento a un objeto
  // values["key"] = "value"
  // values = {
  //  "key": "value"
  // }

  // ahora debemos validar que los inputs y el select esten llenos
  // vamos a crear una varaible que sea true  y si en el forEach hay algun campo vacio esta pasa a ser false
  let validacionInputs = true;
  inputs.forEach((input) => {
    input.style.border = "1px solid #ccc";

    if (input.value === "") {
      validacionInputs = false;
      input.style.border = "1px solid #f01";
    }

    values[input.name] = input.value;
  });

  if (valueGender === "") {
    selectGender.style.border = "1px solid #f01";
    validacionInputs = false;
  }

  if (!validacionInputs) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Debe completar los campos",
    });
    return;
  }

  console.log("validacion", validacionInputs);

  // para poder crear nuestro elemento en el API necesitamos armar un objeto
  // este objeto sera que el que enviaremos al API para que pueda crear una nueva pelicuala
  // const movie = {
  //   name: values.movie_name,
  //   director: values.movie_director,
  //   wallpaper: values.movie_photo,
  //   gender: valueGender,
  //   video_link: values.movie_video,
  // };

  // // Ahora vamos a ejecutar una peticion con el motodo POST porque vamos a crear algo
  // // Sabemos que por default el fetch es de metodo GET
  // // ahora para cambiarlos a un POST necesitamos pasarle un objeto indicando su METODO
  // // al decirle que method ahora es POST automaticamente podremos pasarle un body
  // // body: Es el objeto que vamos a enviar al servidor para que pueda ser creado
  // // body solo recibe strings
  // const response = await fetch(URL, {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(movie),
  // });

  // const data = await response.json();

  // console.log("data", data);
};
