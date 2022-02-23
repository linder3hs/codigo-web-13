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

//* vamos a validar el correo
// regex es un conjunto de caracteres el cual me dice si un elementos es valido
function validarCorreo(event) {
  //* sepan que este regex me va a servir para validar que el correo tenga un formato correcto
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //* regex tiene la propiedad test me permite validar si es correcto y esto retorna true y false
  const emailError = document.querySelector("#email-error");

  //! Si el regex es false entonces hazle un display block al span si no el display sera none
  if (!emailRegex.test(event.target.value)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
}
