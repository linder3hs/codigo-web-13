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
let validacionCorreo = false;
let validacionPassword = false;

function validarCorreo(event) {
  //* sepan que este regex me va a servir para validar que el correo tenga un formato correcto
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //* regex tiene la propiedad test me permite validar si es correcto y esto retorna true y false
  const emailError = document.querySelector("#email-error");

  //! Si el regex es false entonces hazle un display block al span si no el display sera none
  if (!emailRegex.test(event.target.value)) {
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
    validacionCorreo = true;
    validarInputNoVacios();
  }
}

function validarPassword(event) {
  const password = event.target.value.length;
  const passwordError = document.querySelector("#password-error");
  if (password <= 8) {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
    validacionPassword = true;
    validarInputNoVacios();
  }
}

function validarInputNoVacios() {
  const inputs = Array.from(document.querySelectorAll("input"));
  // Estoy evaluando si algun input esta vacio en caso lo este
  // esta funcion retorna false
  for (let i = 0; i < inputs.length; i++) {
    // si todo esta lleno nunca va entrar aqui
    if (inputs[i].value === "") {
      deshabilitarBoton();
      return;
    }
  }
  // una vez que verifique que lo campos no esten vacios
  // he creado 2 variable para saber si el corre y el password son correctos
  if (validacionCorreo && validacionPassword) {
    habilitarBoton();
  } else {
    deshabilitarBoton();
  }
}

function deshabilitarBoton() {
  const botonCrearUsuario = document.querySelector("#btn-crear-usuario");
  botonCrearUsuario.disabled = true;
  botonCrearUsuario.style.backgroundColor = "#ccc";
  botonCrearUsuario.style.color = "#f01";
}

function habilitarBoton() {
  const botonCrearUsuario = document.querySelector("#btn-crear-usuario");
  botonCrearUsuario.disabled = false;
  botonCrearUsuario.style.backgroundColor = "rgb(204, 149, 255)";
  botonCrearUsuario.style.color = "#fff";
}
//* Esto el boton para crear un usuario
const botonCrearUsuario = document.querySelector("#btn-crear-usuario");
//* tengo que agregarlo un evento a mi boton
//* Existe una propiedad llamada
//! addEventListener
//* La cual me permite agregar un evento a un mi elemento html
// este array se va encargar de acumular a los usuarios que registre
let usuarios = [];
botonCrearUsuario.addEventListener("click", function (event) {
  // necesito que la pagina no se recargue
  //* Para evitar la pagina se recage usaremos la function preventDefault()
  //* que es una propiedad de event
  event.preventDefault();
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    console.log(input.value);
  });
  //? Necesito obtener los valores de los inputs
});
