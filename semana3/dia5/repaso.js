// quiero un arreglo de 10 personas
const personas1 = [
  "Jose",
  "Maria",
  "Juan",
  "Luis",
  "Pedro",
  "Julia",
  "Erick",
  "Julian",
  "Rosa",
  "Mario",
];

let personas2 = [
  "juan",
  "Maria",
  "Pedro",
  "Luis",
  "alberto",
  "juana",
  "Mario",
  "Pedrito",
  "Luisa",
  "alberta",
];

const personas3 = [
  "carlos",
  "jose",
  "maria",
  "lisbet",
  "roberto",
  "liseth",
  "alexa",
  "anderson",
  "linder",
];

let personas4 = [
  "Erick",
  "Karina",
  "Patricia",
  "kjaris",
  "Bruno",
  "Pepe",
  "Juanito",
  "pepito",
  "Pedro",
  "Carlos",
];

// como compruebo cuanto elementos tiene un arreglo?
console.log("Personas1", personas1.length);
console.log("Personas2", personas2.length);
console.log("Personas3", personas3.length);
console.log("Personas4", personas4.length);

// si quiero modificar de personas1 el indice 6 y llamor junanito
personas1[6] = "Juanito";

// let valores = [10, 10.5, true, "Hola", 0.5];
// const valores = [true, "hola", 100, 3.69, "false"];
const tipo = [100, "Pepe", true, 50.1, "5"];
const lista = ["juan", true, 10.5, "hola mundo", 5];
const valores = [1];

// quiero una funcion que me retorne el segundo de un arreglo
function obtenerSegundoValor(listaDeValores) {
  //? Esto intentando obtener el valor con indice => 1
  return listaDeValores[1] === undefined
    ? "Error: Posicion no encontrada"
    : listaDeValores[1];
}
console.log(obtenerSegundoValor(tipo));
console.log(obtenerSegundoValor(lista));
console.log(obtenerSegundoValor(valores));

//? UNDEFINED
//? undefined basicamente hace referencia a una variable vacia
//* cuando declaramos una variable y no le asignamos, esta por default es undefined
//? esta variable al no tener un valor js no puede saber que tipo es, como no sabe
//? que tipo le dice que es undefined
let nombre;

// recuerden que en js se sabe el tipo em base al valor
console.log("nombre", nombre);

// new Array
// lo array vacion son variable las cuales empizan vacias y en base a algo se pueden

// Esto es la declaracion de un array vacion
// let carros = new Array();

// la nueva forma es la siguiente
let carrosNuevos = [];

// quiero llenar un array desde una funcion
// vamos a crear una funcion la cual se encargue de llenar el array carrosNuevos
const llenarCarrosNuevos = (nuevoValor) => {
  //* existe una funcion de js llamada push(parametro) la cual recibe
  //* un valor y lo coloca al final de arreglo

  //* Esto le añade el nuevoValor al array carrosNuevos
  //! el push solo funciona si la variable es un arreglo
  carrosNuevos.push(nuevoValor);
};

llenarCarrosNuevos("Mercedez GLA");
llenarCarrosNuevos("BMW M4");
llenarCarrosNuevos("Tesla");
llenarCarrosNuevos("Ford");
// este array seria un elemento de carrosNuevo, por ende esto es un array dentro de un array
llenarCarrosNuevos(["Tiko", "Maverik 62", "mitsubishi"]);

console.log(carrosNuevos);

//! hagmos una funcion que me diga si un numero es par o impar
//? Hagan una function que reciba un numero y retorne si es par o impar
//! para ahorita
