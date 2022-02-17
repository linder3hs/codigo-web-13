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
