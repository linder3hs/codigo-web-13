// Promesa: Sirve para poder ejecutar algo asyncrono
// cuando hacemos una peticion a un API esta tiene un tiempo de espera

// Primera forma en la cual vamos a crear una promesa
// la clase que se encarga de instaciar se llama new Promise()

// resolve: Es el encargado de retornar la respuesta cuando todo es correcto
// reject: Es el encargado de retornar la respuesta cuando todo algo esta mal
// * ambos son funciones que retornan algo
// * cuando creamos una promesa esta no tiene return
const promesa = new Promise((resolve, reject) => {
  // vamos a simular un tiempo de espera
  setTimeout(() => {
    // Esta funcion va a esperar 3 segundos para poder retornar el resolve
    resolve("Todo bien amigos de codigo");
  }, 3000);
});

// como hacemos para poder ejecutar la promesa
async function getDataFromPromesa() {
  const respuesta = await promesa;
  console.log(respuesta);
}
getDataFromPromesa();
// existe otra forma de poder leer una promesa, esta forma existia del async await
// .then() => entonces || luego
// .then( callback )
// callback es una funcion que ejecuta algo en base a un resultado

promesa.then((respuesta) => {
  // cuando acabes de ejecutar la promesa obtener su valor y guardalo en "respuesta"
  console.log("then", respuesta);
});

// que pasaria si tenemos muchas peticiones anidades
// supongamos que tenemos 5 peticiones
// async function peticiones() {
//   const primera = await fetch("primera");
//   const respimera = await primera.json();
//   const segunda = await fetch("segunda");
//   const ressegunda = await segunda.json();
//   const tercera = await fetch("tercera");
//   // const respimera = await primera.json();
//   const cuarta = await fetch("cuarta");
//   // const respimera = await primera.json();
//   const quinta = await fetch("quinta");
//   // const respimera = await primera.json();
// }

// peticiones
//   .then((primera) => {})
//   .then((primerares) => {
//     console.log(primerares.json());
//   })
//   .then((seguna) => {})
//   .then((tercra) => {})
//   .then((cuarta) => {})
//   .then((quinta) => {});

// veamos una promesas con errores
const promesaConError = (validacion) => {
  return new Promise((resolve, reject) => {
    if (validacion) {
      resolve("la validacion esta ok");
    } else {
      // new Error es una clase de JS la cual nos permite retornar con mensaje
      reject(new Error("Error en la validacion"));
    }
  });
};

// veamos como poder validar un error usando .then()
promesaConError(true)
  .then((resuesta) => {
    console.log(resuesta);
    // para poder detectar un error usamos el .catch()
    // si algo esta mal automaticamente entra al .catch()
  })
  .catch((error) => {
    console.log(error.message);
  });

// vamos a validar un error usando async await
const validacionAsync = async () => {
  // la forma en cual podemos validar error en una funcion normal es
  // con try catch
  try {
    // aca va a intentar obtener el resultado de la peticion
    const respuesta = await promesaConError(false);
    console.log("validacionAsync", respuesta);
  } catch (error) {
    // si detecta un error automaticamente entra al catch
    console.log("validacionAsync", error.message);
  }
};
validacionAsync();

// !Recomendacion
//* Siempre que hagamos una peticion acompañemos de un try catch
