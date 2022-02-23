//
function imprimir() {
  console.log("Hola mundo desde una function");
}

function sumar() {
  const numero1 = document.querySelector("#numero1").value;
  const numero2 = document.querySelector("#numero2").value;

  console.log(numero1);
  console.log(numero2);
  //contenedor para imprimir mi resultado
  const contenedor = document.querySelector("#resultado");

  // validar si es que los inputs estan vacios
  if (numero1 === "" || numero2 === "") {
    alert("Debe completar los numeros para continuar");
    //  cuando los datos esten vacio yo debo detener la ejecucion de mi funcion
    return;
  }
  // estamos haciendo la operacion para poder
  // calcumar la suma de los inputs
  const suma = +numero1 + +numero2;

  // como creo una etique p en js?
  const p = document.createElement("p"); //* <p></p>
  // como puede asignar un valor a la etiqueta creada?
  const pValor = document.createTextNode(suma);
  // como agrego el pValor al p?
  p.appendChild(pValor);
  contenedor.appendChild(p);
}
