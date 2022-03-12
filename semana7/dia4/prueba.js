// ahora vamos a ver como podemos utilizar la libreria que acabamos de instalar
// La forma antigua en la cual usabamos una libreria es usando require
// const format = require("date-format");
// El "nuevo" standart es usando import
import format from "date-format";
// Estamos importando express
import express from "express";

// para poder usar express debe ser inicializado
// la forma en la cual vamos a inicializar express es llamando a su funcion
const app = express();
// una vez inicializado podemos crear rutas en la cual queremos mostrar algo

// En express podemos usar los metodos http para poder mostrar algo
// En express cuando creamos una ruta esta tiene un arrow function el cual
// contiene req: Request res: Response
// Request: Es la informacion que estamos obteniendo del cliente
// Response: Es lo que el servidor responde
app.get("/", (req, res) => {
  // Nuestro servidor tiene muchas formas de responder
  // por ejemplo un API suele responder en formato JSON y ademas brinda un status
  // status 200, 201
  // res tiene la propiedad de poder responder en ese formato (JSON)
  res.json({
    message: "Hola mundo",
    error: "no hay error",
  });
});

app.get("/movies", (req, res) => {
  const datos = {
    data: [
      {
        id: 1,
        name: "Batman",
      },
      {
        id: 2,
        name: "Superman",
      },
    ],
  };

  res.json(datos);
});

// para poder acceder a las ruta de nuestro servidor debemos usar un puerto por
// ahora de forma local
// Nota: Los puertos son puertas de un dominio o IP
// Nota2: El puerto mas usado en express el puerto 3000
// para poder decirle a nuestro servidor que escuche en ese puerto debemos llamar la
// funcion listen
app.listen(3000, () => console.log("El servidor inicio"));
// Esto quiere decir que ahora poder usar el puerto de 3000 de mi computador
// para entrar a ese podemos usar 2 formar
// 1: locahost => http://localhost:3000/
// 2: IP Local => 127.0.0.1:3000
