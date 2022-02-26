const crear = document.querySelector("#crear-session");
const obtener = document.querySelector("#obtener-session");
const eliminar = document.querySelector("#eliminar-session");

crear.onclick = function () {
  // Para poder crear una variable en session storage invocamos a session
  sessionStorage.setItem(
    "variable_1",
    "Mi primera variable en session storage"
  );
};

obtener.onclick = function () {
  const variable = sessionStorage.getItem("variable_1");
  console.log(variable);
};

eliminar.onclick = function () {
  sessionStorage.removeItem("variable_1");
};
