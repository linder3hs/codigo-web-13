let nombres = [];

function obtenerValoresDelInput(event) {
  //* event contiene muchos atributos del input
  //* los atributos mas importante que vamos a ver hoy el value y el name
  //? value = sera el contenido del input
  //? name = sera el nombre que le asigne a mi input

  //TODO: event es un objeto y la propiedada que contiene al value y al name se
  //TODO: llama "target"
  //! accediendo al value
  console.log(event.target.value);
  console.log(event.target.name);
  // si fuera un objeto cual seria el key?
  nombres.push({
    [event.target.name]: event.target.value,
  });
}

// vamos a crear una table de persona cual sea como un registe, es decir tengamos input y con boton
// se agregue a mi tabla
