//* addEventListener
//* La forma de JS moderno me permite agregar los eventos de una forma
//* mas legible
const btnPrueba = document.querySelector("#btn-prueba");

btnPrueba.onclick = function (event) {
  console.log("click desde el boton");
  console.log(event);
};

const paises = document.querySelector("#select-opciones");

// onchange: Sirve para detectar si hay un cambio en mi elemento
paises.onchange = function (event) {
  console.log("probamos el evento onchange");
};
