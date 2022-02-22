/**
 * * Existe dentro de JS el document, este atributo de JS me va a permitir
 * * obtener los elementos de HTML
 */

/**
 * * Obteniendo elementos en base a su tag
 * * tag = etiquetar
 * <h1></h1> tagname = h1
 * <input /> tagname = input
 * <form></form> tagname = form
 */

// ? como tengo 4 elementos con el tagname input esto sera un array de inputs
const inputs = document.getElementsByTagName("input");
//! Recordemos que input es un HTMLCollection, pero para poder ser iterado debe ser convertido aun array
//! normal vamos a usar Array.from para convertir este HTMLColletion a un array normal
const newInputs = Array.from(inputs);
console.log("inputs", inputs);
console.log("newinputs", newInputs);
// un map a inputs
newInputs.map((newInput) => {
  console.log("newInput", newInput);
});

const form = document.getElementsByTagName("form");

// accedan al boton
const button = document.getElementsByTagName("button");
