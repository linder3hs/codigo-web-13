/**
 * * JS tiene el poder de escribir en el dom,
 * asi como puede obtener los elementos, puedes
 * escrbir, alterar, aumentar, etc en el dom
 */
/**
 * * document.write(text) me permite escribir en el DOM, este
 * text se ubica debajo de la etiqueta script
 */
document.write("Hola mundo");
document.write("Hola mundo2");
document.write("Hola mundo3");

/*
 * Vamos a crear una lista usando JS
 * 1) Insertar una lista dentro del div#container-list
 * 2) Insertar elemenos dentro de mi lista li
 */

// const containerList = document.querySelector("#container-list");
// //? JS tiene una funcion llamada createElement la cual me permite crear elementos de html
// const ul = document.createElement("ul");
// ul.className = "lista";

// const inputs = Array.from(document.querySelectorAll("input"));

// inputs.map((input) => {
//   const li = document.createElement("li");
//   const contenido = document.createTextNode(input.value);
//   li.appendChild(contenido);
//   ul.appendChild(li);
// });

// console.log(ul);
// containerList.appendChild(ul);

//* Retos: Quiero crear una lista con los datos que tengo en los inputs
const inputs = Array.from(document.querySelectorAll("input"));
// obtener a mi contenedor
const contenedor = document.querySelector("#container-list");
// vamos a crear un ul desde JS
const ul = document.createElement("ul");
// ahora debo llenar mi lista, para poder llenar mi lista debo convertir mi NodeList
// a un array
inputs.map((input) => {
  // en la iteracion debo crear cada elemento de mi lista
  const li = document.createElement("li");
  // debo crear el valor de mi li, que es input.value
  // createTextNode: Crea los valores para elementos html
  const elementText = document.createTextNode(input.value);
  // ahora debo insertar el valor en mi li
  li.appendChild(elementText);
  // debo agregarlo a mi lista
  ul.appendChild(li);
});
// como mi lista esta entonces ahora necesita agregar a mi contenedor
contenedor.appendChild(ul);

// para acceder a todo el body
const body = document.body;
body.style.backgroundColor = "yellow";
body.style.fontFamily = "Helvetica";

// head
const head = document.head;

//! Podemos decir en JS todo es un objeto
