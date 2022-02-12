const numero1 = 10;
const numero2 = 20;

// recuerden el ; no importa
let resultado = 0;

resultado = numero1 + numero2;

// recuerden
// alert : Es una alerta en el navegador
// console.log : Escribe un mensaje en la consola del navegador
// Resultado: 10 + 20 = 30
// ojo el simbolo + tiene 2 propositos
// 1. Suma siempre cuando sea numeros
// 2. Concatenacion peros si son strings junto a numbers lo que hace es concatenar
// console.log("Resultado: " + numero1 + " + " + numero2 + " = " + resultado);

// otra propiedad del console.log poder darle un key a un valor
// console.log("Sumatoria:", resultado);

// Existe el console.error y console.warn
// el console.error es para errores
// el console.warn es para advertencias
console.error("Suma Error:", resultado);

resultado = numero1 - numero2;
console.warn("Resultado: ", resultado);

// vamos a hacer una calculadora con JS
// restricciones debemos validar la division / 0

// prompt: es una ventana emergente que nos pide un valor
// abre una ventana tipo alerta pero la cual nos permite ingresar valor
// y ese valor se guarda en una variable

const valor1 = 10; //prompt("Ingrese un valor1"); // 10
const valor2 = 20; //prompt("Ingrese un valor2"); // 20

// necesito que el usuario ingrese el tipo de operacion que puede ser
// ** Pueder ser => +, -, *, /
const operacion = "+"; // prompt("Ingrese una operacion pueder ser + - * /");

let resultadoCalculadora = 0;

// para poder hacer las calculos debe convetir mi variable de string a number
// parseInt : convierte un string a number
// + : Colocamos el simbolo delante de la variable y esta se convierte en number

if (operacion === "+") {
  resultadoCalculadora = +valor1 + +valor2;
  console.log("Resultado: ", resultadoCalculadora);
} else if (operacion === "-") {
  resultadoCalculadora = +valor1 - +valor2;
  console.log("Resultado: ", resultadoCalculadora);
} else if (operacion === "*") {
  resultadoCalculadora = +valor1 * +valor2;
  console.log("Resultado: ", resultadoCalculadora);
} else if (operacion === "/") {
  // que paso extra debo hacer en la division?
  if (+valor2 !== 0) {
    resultadoCalculadora = +valor1 / +valor2;
    console.log("Resultado: ", resultadoCalculadora);
  } else {
    console.warn("El divisor debe ser distinto a 0");
  }
} else {
  console.error("Operacion no valida");
}

// Haremos un algoritmo para poder detectar si un numero es par o impar
const numeroMultiplo = 12;

// la forma en la que pueda saber si un numero es par es usando %
// porque es una operacion que brinda el residuo

// mod = %
if (numeroMultiplo % 2 === 0) {
  console.log("Numero par", numeroMultiplo);
}

if (numeroMultiplo % 3 === 0) {
  console.log("Numero multiplo de 3", numeroMultiplo);
}

// Escriban un algoritmo que pida
// 2 numeros usando prompt e impriman el numero mayor
const numeroOne = +prompt("Ingrese un numero1");
const numeroTwo = +prompt("Ingrese un numero2");

let mensajeRes = "Numero 2 es mayor";

if (numeroOne > numeroTwo) {
  mensajeRes = "Numero 1 es mayor";
}

console.log(mensajeRes);

// vamos a ver como usar los operadores and y or
// and : &&
// or : ||
// ** Esto podemos usarlo en los if

const edadMayor = 19;
const nombreMayor = "Juan";

// !! se usa para poder concatenar condiciones
// !! Pueden poner una cantidad ilimitada de condiciones

// !! ambas condiciones se deben para cumplir para entrar al if
if (edadMayor === 18 && nombreMayor === "Juan") {
  console.log("El usuario es Juan y tiene 18 años");
}

// !! al menos una de las 2 condiciones se debe cumplir para entrar al if
if (edadMayor === 18 || nombreMayor === "Juan") {
  console.log("El usuario es Juan o tiene 18 años");
}

// ** Consejo: Traten de no usar mucho el else

// Escriban un algoritmo que pida
// 3 numeros usando prompt e impriman el numero mayor

// booleanos
// true || false
