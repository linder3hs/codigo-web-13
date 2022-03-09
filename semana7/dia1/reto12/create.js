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
  inputs.forEach((input) => {
    console.log(input.value);
  });
  console.log("valueGender", valueGender);
};
