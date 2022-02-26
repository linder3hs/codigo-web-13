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
