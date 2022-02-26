// * obtener el valor de los botones

let valorActual = "";
let ulitimoValor = 0;
let ultimaOperacion = "";
let resultado = 0;
// # = menos
// -- no me funciona
function getValueFromButton(event) {
  let value = event.getAttribute("data-value");
  value = value.split("-")[1];
  console.log(value);
  valorActual += value;
}

function sumar() {
  if (ulitimoValor === 0) {
    ulitimoValor = +valorActual;
    valorActual = "";
    ultimaOperacion = "+";
    if (resultado !== 0) {
      valorActual = 0;
      resultado = +resultado + ulitimoValor + +valorActual;
    }
    valorActual = "";
  } else {
    resultado = +resultado + ulitimoValor + +valorActual;
    ulitimoValor = 0;
    valorActual = "";
  }
  console.log(resultado);
}

function restar() {}

function multiplicar() {}

function dividor() {}

function calcular() {}
