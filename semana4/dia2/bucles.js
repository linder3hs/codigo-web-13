//* Un blucle es una estructura repetitiva, es decir hacer algo muchas veces

//* los bucles son usados para poder leer arrays, porque un bucle me va a permitir
//* lee cada elemento idenpendiemente

//TODO: for, es español es para y es el bucle mas antiguo y conocido
//? EJM

// iterador => indice de mi bucle
// i++
// i = i + 1
// indica que se hara de 1 en 1

// for (let i = 0; i < 10; i++) {
//   console.log("Iterador", i);
// }

// for (let i = 5; i < 20; i++) {
//   console.log("Iterador 2", i);
// }

// for (let j = 10; j < 50; j++) {
//   console.log("Iterador3", j);
// }

// const alumnos = ["Pepe", "Juana", "Stephanie", "Carlos", "Luis"];

// for (let i = 0; i < alumnos.length; i++) {
//   console.log(alumnos[i]);
// }

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let j = 0; j < numeros.length; j++) {
//   // como haria si solo quiero imprimir los numeros pares?
//   if (numeros[j] % 2 === 0) {
//     console.log(numeros[j]);
//   }
// }

// const laptops = [
//   {
//     marca: "Lenovo",
//     imagen: "https://logo.com",
//     nombre: "Ide Centre AIO I3",
//     vendedor: "Falabella",
//     precioOferta: 1599,
//     precioNormal: 3599,
//     calificacion: 2,
//   },
//   {
//     marca: "Acer",
//     imagen: "https://logo.com",
//     nombre: "AN515 15.6",
//     vendedor: "Falabella",
//     precioOferta: 3399,
//     precioNormal: 4999,
//     calificacion: 5,
//   },
// ];

// for (o = 0; o < laptops.length; o++) {
//   console.log(laptops[o].marca);
// }

// // array de objetos de alumnos
// const alumnos = [
//   {
//     nombre: "Pepe",
//     edad: 21,
//   },
//   {
//     nombre: "Juan",
//     edad: 30,
//   },
//   {
//     nombre: "Lucho",
//     edad: 22,
//   },
// ];

// //* .length devuele el numero de elementos de un array
// //! recurden que el indice de un array inicial en 0

// //  variable inicial - condicion de limite - de cuanto en cuanto se hace la accion
// for (let obj = 0; obj < alumnos.length; obj++) {
//   // obj es el numero que se incrementa de 1 en 1
//   // console.log("obj", obj);
//   // console.log(alumnos[0]);
//   // console.log(alumnos[1]);
//   // console.log(alumnos[2]);
//   console.log(alumnos[obj]);
//   // como acceso a la propiedad objeto?
//   console.log(alumnos[obj].nombre);

//   console.log("------------------");
//   console.log("Imprimir solo si la edad del alumno es menor 30");

//   if (alumnos[obj].edad < 30) {
//     console.log(alumnos[obj]);
//   }

//   console.log("------------------");
// }

// Escribe un programa que pida una frase y escriba cuántas
// veces aparecen cada una de las vocales

const contarVocales = (frase) => {
  const fraseMayuscula = frase.toUpperCase();
  // para poder saber cuantos vocales tengo necesito un contador
  // este contador se va a encargar de guardar cuantas vocales tengo
  let contador = 0;

  for (let i = 0; i < fraseMayuscula.length; i++) {
    const letra = fraseMayuscula[i];

    if (
      letra === "A" ||
      letra === "E" ||
      letra === "I" ||
      letra === "O" ||
      letra === "U"
    ) {
      // contador = contador + 1;
      contador++;
    }
  }

  return `La frase tiene ${contador} vocales`;
};

console.log(contarVocales("HolA me llamO Juan"));
console.log(contarVocales("aeiou"));

//Escribir un programa que escriba en pantalla los divisores comunes
// de dos números dados

//paso 1 debemos hallar los numero divisibles
// 10 => 1, 2, 5, 10

// const hallarDivisoresComunes = (numero1, numero2) => {
//   // // como puedo hallar los divires de un numero?
//   // // para poder hallar los divisiones de ese numero, necesito un for

//   // // supongamos que numero1 = 10
//   // for (let i = 1; i <= numero1; i++) {
//   //   // para saber si un numero es divisible por otro el residuo debe ser 0
//   //   // si quiero imprimir a los divisor debe imprimir a i porque en cada
//   //   // vuelta el valor de i cambia
//   //   //! ojo no imprimo numero1 porque numero1 siempre va a valer 10
//   //   if (numero1 % i === 0) {
//   //     console.log(i);
//   //   }
//   // }

//   // for (let j = 1; j <= numero2; j++) {
//   //   if (numero2 % j === 0) {
//   //     console.log(j);
//   //   }
//   // }
//   const divisores = [];

//   const divisores1 = hallarDivisores(numero1, divisores);
//   const divisores2 = hallarDivisores(numero2, divisores1);

//   // console.log("Divisore1", divisores1);
//   console.log("Divisores", divisores2);

//   return divisoresComunes;
// };

const hallarDivisoresComunes = (numero1, numero2) => {
  const arrayDivisores = [];
  const primerosDivisores = hallarDivisores(numero1, arrayDivisores);
  // entonces la variable primerosDivisores es un array
  const segundosDivosores = hallarDivisores(numero2, primerosDivisores);
  // sort sirve para ordenar un array
  const arrayOrdernado = segundosDivosores.sort();
  console.log(arrayOrdernado);

  for (let i = 0; i < arrayOrdernado.length; i++) {
    if (arrayOrdernado[i] === arrayOrdernado[i + 1]) {
      console.log(arrayOrdernado[i]);
    }
  }
};

// para que funcion sea operativa debe retornar un arreglo con los numeros que son
// divisores
const hallarDivisores = (numero, divisores) => {
  for (let j = 1; j <= numero; j++) {
    if (numero % j === 0) {
      // push sirve para agregar un elemento en la ultima posicion a un array
      divisores.push(j);
    }
  }

  return divisores;
};

hallarDivisoresComunes(12, 24);
