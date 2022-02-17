//* while tambien sirve para poder hacer una accion un numero determinado de veces
//* es decir es un bucle

//* la estrcura del while siempre va acompañada de un contador

// while (la_condicion) {

// }

let contador = 0;

while (contador < 5) {
  console.log("contador", contador);
  //! no se olviden de alterar el contador en cada vuelta
  contador++;
}

//* 1 => Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

const imprimirDiezVeces = (palabra) => {
  let contador = 0;

  while (contador < 10) {
    console.log(palabra);
    contador++;
  }
};

imprimirDiezVeces("Hola Tecsup");

//* Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.
const imprimirTablaMultiplicar = (numero) => {
  let contador = 0;

  while (contador <= 10) {
    console.log(numero * contador);
    contador++;
  }
};

// console.log("Table 1");
// imprimirTablaMultiplicar(1);
// console.log("Table 2");
// imprimirTablaMultiplicar(2);
// console.log("Table 3");
// imprimirTablaMultiplicar(12);

//* Escribir un programa que pida al usuario un número entero positivo y muestre por
//* pantalla todos los números impares desde 1 hasta ese número separados por comas.
// TODO: 10
//! Resultado: 1, 3, 5, 7, 9

//? HAGAN LO MISMO PERO AHORA CON FOR
const hallarNumerosImpares = (numero) => {
  if (numero <= 0) {
    // termina el programa y retorna ese mensaje
    return "Solo numeros positivos";
  }

  let contador = 0;

  let resultado = "";
  while (contador <= numero) {
    if (contador % 2 !== 0) {
      //* resultado = resultado + contador.toString() + ", "
      resultado += `${contador}, `;
    }
    contador++;
  }

  return resultado;
};

console.log("Numeros impares", hallarNumerosImpares(10));

// const imprimirNumerosImpares = (numero) => {
//   let contador = 0;
//   while (contador <= numero) {
//     if (contador % 2 !== 0) {
//       console.log(contador);
//     }
//     contador++;
//   }
// };
// imprimirNumerosImpares(4);

//* Escribir un programa que pida al usuario un número entero y
//* muestre por pantalla si es un número primo o no.
//? 1 => 1
//? 2 => 1, 2
//? 3 => 1, 3
//? 4 => 1, 2, 4
//? 5 => 1, 6
//? 6 => 1, 2, 3, 6
//? 7 => 1, 7

const hallarNumeroPrimo = (numero) => {
  //? como sabeos si un numero es entero
  if (numero % 1 !== 0) {
    return "El numero es un decimal";
  }

  if (numero === 1) {
    return "No es un numero primo";
  }

  let contador = 0;
  let contadorDeDivisores = 0;

  while (contador <= numero) {
    if (numero % contador === 0) {
      contadorDeDivisores++;
    }
    contador++;
  }
  //* que estoy guardando en la variable contadorDeDivisores
  return contadorDeDivisores === 2
    ? "Si es un numero primo"
    : "No es un numero primo";
};
