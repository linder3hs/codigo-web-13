const optionMode = document.querySelector("#option-mode");
// porque traigo a body?
const body = document.querySelector("body");

// vamos a usar el evento onchange para poder obtener el valor del select
optionMode.onchange = function (event) {
  // se acuerdan de la destructuracion de objetos?
  // esto obteniendo value desde la variable event.target

  // esto nos ayuda a poder extraer los valores de un objeto y poder almacenarlos en una variable
  //! estamos extrayendo value y name desde event.target
  // const value = event.target.value
  // const name = event.target.name
  const { value } = event.target;

  // aca debemos validar si el value es igual a dark entonces
  // al body demos agregarle el data-mode con valor dark si no
  // le agregagamos el valor ligth
  //? <body data-mode="dark"></body>
  //   body.setAttribute("data-mode", value);
  //TODO value es dark o light
  body.setAttribute("data-mode", value);
};

// la funcion matchMedia detecta en modo esta nuestro dispositivo
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // dark mode
  body.setAttribute("data-mode", "dark");
} else {
  body.setAttribute("data-mode", "light");
}
