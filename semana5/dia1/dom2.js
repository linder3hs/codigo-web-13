/**
 * * querySelector y querySelectorAll
 * * son los hermanos menores de
 * * getElementById, getElementByClassName y
 * * getElementByTagName */

/**
 * * Ambas funciones me permite poder usar
 * * elementos de html en js
 * * Ejemplo
 * ! El querySelector solo devuelve 1 elemento
 */

// ESTO ES CON CLASS
const inputName = document.querySelector(".input_name");
console.log(inputName.value);
// ESTO ES COM ID
const inputEmail = document.querySelector("#input_email");
console.log(inputEmail.value);
// ESTO CON EL TAGNAME
const form = document.querySelector("form");
console.log(form);

/**
 * * querySelectorAll : Permite obtener mas de un elemento a la vez
 */

//? esto retorna un NodeList y es compatible con forEach
const inputs = document.querySelectorAll("input");
console.log(inputs);
//* quiero filtrar a los inputs que sean de tipo text
const arrayInputsText = [];
inputs.forEach((input) => {
  if (input.type === "text") {
    arrayInputsText.push(input);
  }
});
console.log(arrayInputsText);

const arrayConvertidoInputs = Array.from(inputs);
console.log(arrayConvertidoInputs);

const arrayConvertidoFilter = arrayConvertidoInputs.filter(
  (input) => input.type === "text"
);
console.log("arrayConvertidoFilter", arrayConvertidoFilter);
