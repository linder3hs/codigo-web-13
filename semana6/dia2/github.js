/**
 * * API (Application Programming Interface)
 * * Es un servicio el cual puede proveer informacion o tambien puede crearla
 * * Para este caso vamos a usar el API de github la cual al pasarle un usuario
 * * esta nos devulve la informacion
 */

// * En js existe una funcion la cual se encarga de poder hacer una peticion a un URL
// TODO: fetch()
//* Es una funcion nativa de JS
// * Existen varios tipos de peticiones donde las principales son
// ? GET => Sirve para obtener informacion
// ? POST => Sirve para crear datos
// ? PUT => Sirve para actualizar datos
// ? DELETE => Sirve para eliminar

//* Funcion async
//* La funciones async fueron creadas para poder ejecutar algo y en caso la ejecucion de esto
//* demore mas de lo normal se espere para poder ejecutar el siguiente

//? https://api.github.com/users/WillyPAtino
//* HAY UN TIEMPO DE ESPERA el cual no sabemos cuanto es, ahora como la ejecucion de la peticion a la url
//* no es automatica debemos decirle a nuestra funcion que se espere un poquito antes de pasar
//* a la siguiente linea

//! Estructura de una funcion async
// al aumentar el async estamos convirtiendo nuestra funcion a un funcion async
// * async function obtenerDatos() {}

//* const obtenerDatosGit = async () => {};

//* Existe una palabra clave la cual le dira al codigo que se espere
// * await =>

const imageProfile = document.querySelector("#img-profile");

const obtenerDatosGitHub = async () => {
  //* En este ejemplo await esta haciendo lo siguiente
  //* Ejecuta fetch con la url y una vez que acabe la ejecucion de fetch recien haz el console.log
  const response = await fetch("https://api.github.com/users/JhonyWalker1");
  //* es decir hasta que la ejecucion de fetch no termine no se ejecutura la siguiente linea
  //* ahora necesitamos leer la data que estamos solicitando
  //* para poder leer esta informacion debemos transformar el response a un JSON
  const data = await response.json();
  imageProfile.src = data.avatar_url;
  console.log(data);
};
obtenerDatosGitHub();
