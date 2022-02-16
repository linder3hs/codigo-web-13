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
  // saber cuando mide la frase
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

  console.log(`La frase tiene ${contador} vocales`);
};

contarVocales("Hola me llamo Juan");
contarVocales("aeiou");
