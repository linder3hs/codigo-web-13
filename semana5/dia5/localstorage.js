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
};

//* Vamos a obtener los datos de localStorage
//* la forma que en que obtenemos los datos es
//* localStorage.getItem(key)
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

if (email !== "" && password !== "") {
  // El usario ya esta logueado
  // Si el usario esta logueado voy a ocultar el form
  form.style.display = "none";
  titleEmail.innerHTML = email;
  titlePassword.innerHTML = password;
}
