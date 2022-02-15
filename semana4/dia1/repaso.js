//* Tipos de datos
/**
 * * string
 * * number
 * * boolean
 * * undefined
 */

//? Ejemplos de string
const mensaje = "Hola";
var pepito = "Saludando";
let nombre = "Dario";
let numeroString = "100.5632";

//? Ejemplos de number
const nombreNumber = +"nombre";
console.log("tipo de variable", typeof nombreNumber);
//! ojo typeof solo sirve para decirme que tipo de dato es una variable,
//! recueden que js sabe que tipo es en base al valor de variable
let numeroNumber = 1000.1432432;
const edadMayor = 21;
let edad = 10;
const numero = 45;

//? Ejemplos de boolean solo es verdadero o false
let estado = true;
let sexo = true;
let rpta = false;
let aprobado = true;

//? Recuerden cuando una variable no tiene un valor asignado, js interpreta
//? que es un undefined
let componentes;

let apellido;
let nota;
let titulo;

//? toString(): Esta funcion se va encargar de transformar una variable a tipo string
let dineroEnElBanco = 10;
console.log("por si no me creen", typeof dineroEnElBanco);
// vamos a ver como transforma este number a string
console.log("por si no me creen", typeof dineroEnElBanco.toString());

//? Ejemplo
//? Cuando hacemos una peticion y queremos enviarle datos el servidor nos dice
//? que tipo de datos requiere
//? quiero crear un usuario
//? nombre, apellido, edad, celular
//? string, string,   number, number
//* edad.toString()
//* celular.toString()

//? Arreglo de alumnos
//? Arreglo de notas
//? array de  juegos

let alumnos = ["Luis", "karen", "Pedro", "Raul"];
let notas = [20, 16, 18, 15];
let juegos = ["domino", "sapito", "cuerda", "starcraft"];

// como puedo imprimir el siguient mensaje
//TODO => Luis tiene 20 en programacion y juega domino
console.log(
  `${alumnos[0]} tines ${notas[0]} en programacion y juega ${juegos[0]}`
);

// TODO => Karen tiene 18 en programacin y juega sapito
console.log(
  `${alumnos[1]} tiene ${notas[2]} en programación y juega ${juegos[1]}`
);

//? Funciones
//! Creen un arrow function que reciba 2 parametros y me retorne el cuadrado de ambos numeros
//* cuadrado de 2 = 2*2
//* cuadrado de 8 = 8*8

//? Math, es una libreria de JS la cual no permite hacer operaciones mateticas
//? Math.pow se usa para poder elever un numero a la potencia, recibe 2 paramateros
//? Parametro1 = numero Parametro2 = potencia
//! Math.pow(numero, 2)

//! Tip: Usen funcion de una linea cuando la solucion sea corta si es algo extenso preferible
//! usar las lineas que haga falta

// const calcularCuadrados = (num1, num2) => {
//   return `El cuadrado del primer numero es: ${Math.pow(num1, 3)}
//   \nEl cuadrado del segundo numero es: ${num2 ** 2}`;
// };

// console.log(calcularCuadrados(1, 2));

//! Creen una funcion la cual pida el nombre, apellido y edad y retorne un mensaje de saludo
// const saludar = (nombre, apellido, edad) => {
//   return `Hola ${nombre} ${apellido} de ${edad} años.`;
// };

//! Creen un arrow funcion el cual retorne el area de un rectangulo
// const calcularAreaRectangulo = (base, altura) => {
//   return +base * +altura;
// };

//* Una funcion siempre debe retornar algo y para eso usamos return, hay casos esciales en lo que no
//* hace falta

//* El console.log usenlo para probar nada mas, ademas son temporales solo se usan para probar y
//* luego deberian borrarse

//? Del operador ternario

//* Creemos una funcion que reciba la edad y retorne si es mayor
const esMayor = (edad) => {
  if (edad >= 18) {
    return `es mayor de edad ${edad}`;
  } else {
    return "es menor de edad";
  }
};

const esMayor2 = (edad) => {
  return edad >= 18 ? "es mayor de edad" : "es menor de edad";
};

//! Creen una funcion que reciba un array y si el length de array es mayor a 5 entonces retorna
//! "arreglo grander" si no retorna "arreglo peque"
//? usando el operador ternario
const medirArray = (array) =>
  array.lenght > 5 ? "Arreglo grande" : "Arreglo pequeño";

const definirSiArrayEsGrandeOPeque = (arreglo) => {
  return arreglo.length > 5 ? "Es grande" : "es pequeño";
};

const retornarArreglo = (datos) => {
  return datos.length > 5 ? "arreglo grande" : "arreglo pequeño";
};

const retunrArray = (a) => {
  return a.lenght > 5 ? "arreglo grande" : "arreglo peque";
};

const consultarTamanoArray = (array) =>
  array.length > 5 ? `Arreglo grande` : `Arreglo pequeno`;

const arreglo = (datos) =>
  datos.lenght > 5 ? "es arreglo grande" : "es arreglo pequeño";

const edades = [20, 10, 40, 15, 16, 14];
const calcularArray = (edades) => {
  return edades.lenght > 5 ? "Array largo" : "Array corto";
};

const myArray = (array) => {
  array.length > 5 ? "arreglo grande" : "arreglo pequeño";
};

const hallerTamañoArreglo = (array) => {
  return array.length > 5 ? "Arreglo grande" : "Arreglo pequeño";
};

const arregloLength = (dato) => {
  return dato.length > 5 ? "es grande" : "es peque";
};

const recibirArreglo = (array) => {
  return array.length > 5 ? "array grande" : "Array peque";
};

const validarArray = (arr) =>
  arr.length > 5 ? "Arreglo grande" : "Areglo pequeño";

const tamanoArray = (arreglo) =>
  arreglo.length > 5 ? "Es grande" : "Es pequeño";

//? Arrow funcion inline
//? solo funciona cuando voy a ejecutar una sola linea de codigo

// const saludar = (nombre) => `Hola ${nombre}`;

// const saludar = (nombre) => {
//   const nombre = nombre + " pepe";
//   return `Hola ${nombre}`;
// };
