function obtenerValoresDelInput(event) {
  //* event contiene muchos atributos del input
  //* los atributos mas importante que vamos a ver hoy el value y el name
  //? value = sera el contenido del input
  //? name = sera el nombre que le asigne a mi input

  //TODO: event es un objeto y la propiedada que contiene al value y al name se
  //TODO: llama "target"
  //! accediendo al value
  console.log(event.target.value);
}
