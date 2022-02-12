// ** Una funcion es un conjunto de soluciones para poder
// ** realizar taeras

function nombreDeLaFuncion() {
  // una vez declarada mi funcion todo el codigo que haga
  // dentro de esta solo se va a ejecutar cuando llame a la funcion

  //! Esto no se va a ejecutar
  console.log("Mi primera funcion");
}

//* para poder llamar a una function solo necesito escribir su nombre junto a los parentesis

//** Una vez que llame a la funcion esta va a ejecutar el condigo que tiene dentro */
nombreDeLaFuncion();

//? Una funcion es creada para poder reutilizar codigo
//? Una de las misiones de una funcion es que hacer un trabajo repetitivo
//? al estar este trabajo en una funcion solo necesito escribir el codigo una vez
//? y luego llamar a la funcion para que la necesite

// TODO: Una funcion puede recibir parametros (son variables que se le pasan a la funcion) y
// TODO: Estos parametros van dentro de los parentesis de la funcion
// function sumar(numero1, numero2) {
//   //* numero1, numero2 son parametros de la function sumar.
//   //* con los parametros yo puedo hacer lo que quiera
//   const suma = +numero1 + +numero2;
//   console.log("Suna:", suma);
// }

// function sumar(numero1, numero2) {
//   // primero voy a convetir los parametros a numeros
//   const convertNumero1 = +numero1;
//   const convertNumero2 = +numero2;

//   const suma = convertNumero1 + convertNumero2;

//   // si suma es nan debo imprimir un mensaje de error
//   // isNaN(parametro) me permite saber si un numero Nan
//   if (isNaN(suma)) {
//     console.log("Error: No se puede sumar");
//     //* que es return
//     //* return es una palabra reservada que nos permite regresar un valor y
//     //* y ademas indica el final de la funcion
//     // si entra al if y ve el return la funciona termina aca, es decir no a a ejecutar mas codigo
//     return;
//   }
//   console.log("Suma:", suma);
// }

// Return: Es una palabra en la funcion la cual se encarga de retornar un valor
// tambien le pone fin a la ejeucion de la funcion

// function sumar(numero1, numero2) {
//   const suma = +numero1 + +numero2;

//   if (isNaN(suma)) {
//     return "Error: No se puede sumar";
//   }

//   return suma;
// }

// * Operador ternario
//* Es una de if else pero que solo sirve cuando quiro una linea

//! la estructura de un operador ternario es la siguiente

// condicion ? true (si es true puede ejecutar una linea) : false (si es false puede ejecutar una linea)

function sumar(numero1, numero2) {
  const suma = +numero1 + +numero2;

  return isNaN(suma) ? "Error: no se puede sumar" : suma;
}

//! Cuando yo llame a sumar yo debo pasarle numero1 y numero2
//! el orden que yo le paso los parametros sera el orden en que los reciva
console.log(sumar(50, 20));
console.log(sumar(10, 50));
console.log(sumar(100, 200));
console.log(sumar(31.5, 40.4));
console.log(sumar("hola", 10));
console.log(sumar("hola2", 10));
console.log(sumar("10", 30));

// const num1 = +prompt("Ingrese el primer numero1");
// const num2 = +prompt("Ingrese el segundo numero2");
// sumar(num1, num2);

//* se puede llamar una funcion dentro de otra?
//* si, se puede

// TODO: Function de expresion
// !Es tener una funcion dentro de una variable
// !Es conocido function anonima
const resta = function (numero1, numero2) {
  const calcResta = +numero1 - +numero2;

  return isNaN(calcResta) ? "Error: no se puede restar" : calcResta;
};

console.log("Resta:", resta(10, 20));

// Ejemplo2
const multiplicacion = function (numero1, numero2) {
  const calcMultiplicacion = +numero1 * +numero2;

  return isNaN(calcMultiplicacion)
    ? "Error: no se puede multiplicar"
    : calcMultiplicacion;
};

//* arrow function => funciones flecha
//* Es una function parecida a la funciona anonima o de expresion, sim embargo no
//* hace falta usar la palabra function para declarar esta.
//* Otro punto importante es que una funcion flecha no puede usar `this`
//* Esto es la diferencia entre una funcion y un arrow function
//? como declaramos un arrow function?
const division = (numero1, numero2) => {
  if (+numero2 === 0) {
    // termina la ejeccion de la funcion y retorn ese string
    return "Error: no se puede dividir por 0";
  }

  const calcDivision = +numero1 / +numero2;
  return isNaN(calcDivision) ? "Error: no se puede dividir" : calcDivision;
};

console.log(division(10, "0"));
console.log("Division:", division(10, 2));

//? Cas1 cuando nuestro arrow function solo recibe un parametro no hace falta poner parentesis
const saludar = (nombre, apellido) => {
  // como imprimir de una forma mas elegante
  // return "Hola mi nombre es " + nombre + " y mi apellido es " + apellido;
  return `Hola mi nombre es ${nombre} y mi apellid es ${apellido}`;
};

console.log(saludar("Juan", "Perez"));

//? Ahora cuando un arrow no recibe parametros no hace falta poner parentesis
const funcionSinParametros = _ => {
  return "Hola Mundo";
};

//? VAMOS a ver un arrow function inline
//? Este tipo de funcion solo funcion cuando quiero ejecutar una linea de codigo
//? Cuando usamos este tipo de funcion el return esta implicito
const hello = () => "Hola Mundo in one line";
