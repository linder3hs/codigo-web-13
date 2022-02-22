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

const containerList = document.querySelector("#container-list");
//? JS tiene una funcion llamada createElement la cual me permite crear elementos de html
const ul = document.createElement("ul");
ul.className = "lista";
const li1 = document.createElement("li");
const contenido = document.createTextNode("BMW M4");
//* ahora debemos agregar el contenido a li1 y luego agregar li1 a ul
//* En JS existe la funcion appendChild la cual permite agregar un elemento a otro
li1.appendChild(contenido);
console.log(li1);
ul.appendChild(li1);
console.log(ul);
containerList.appendChild(ul);
