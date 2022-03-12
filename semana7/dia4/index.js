// Este sera el archivo donde vamos a trabajar hoy nuestro API de movies
import express from "express";
// ahora vamos a importar la variable movies
// para importar una variable de otro archivo usamos import
import { arrayMovies } from "./movies.js";

const app = express();

// para poder crear nuestras rutas
// para este ejemplo vamos a crear un archivo llamando movies.js
// donde guardaremos un array de objetos
// vamos a crear una ruta movies para poder listar nuestras peliculas
app.get("/movies", (req, res) => {
  res.json(arrayMovies);
});

app.listen(3000, () =>
  console.log("Servidor iniciado en http://localhost:3000")
);
