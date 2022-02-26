const btnLogin = document.querySelector("#btn-login");

btnLogin.onclick = function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    //* Vamos a guardar el correo y el password en localStorage
    // localStorage.setItem(key, value)
    // con setItem guardamos un valor en localStorage
    localStorage.setItem(input.name, input.value);
  });

  login();
};

//* Vamos a obtener los datos de localStorage
//* la forma que en que obtenemos los datos es
//* localStorage.getItem(key)
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  form.style.display = "none";
  usuarioSection.style.display = "block";
  titleEmail.innerHTML = email;
  titlePassword.innerHTML = password;
}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSession = document.querySelector("#cerrar-session");
const usuarioSection = document.querySelector("#usuario-logged");

if (email !== null && password !== null) {
  // El usario ya esta logueado
  // Si el usario esta logueado voy a ocultar el form
  login();
} else {
  usuarioSection.style.display = "none";
}

btnCerrarSession.onclick = function () {
  //* vamos a eliminar las variables de localStorage
  //! localStorage.removeItem(key)
  localStorage.removeItem("password");
  localStorage.removeItem("email");
  // Es mostrar el formulario y ocultar el mensaje del usuario
  form.style.display = "block";
  usuarioSection.style.display = "none";
};
