//
function imprimir() {
  console.log("Hola mundo desde una function");
}

// La idea es tener una funcion que reciba un parametro el cual me indique si es + - * /
// Em base a ese parametro llama a la funcion que necesite del archivo operaciones y retorno
// resultado

function calculadorHTML(operacion) {
  // obtener el valor de los inputs
  const numero1 = document.querySelector("#numero1").value;
  const numero2 = document.querySelector("#numero2").value;
  // validamos que lo datos no esten vacios

  if (numero1 === "" || numero2 === "") {
    alert("Debe completar los campos");
    return;
  }

  // una vez que validate los campos debo hallar la operacion
  // necesito una variable que se encargue de guardar el resultado
  let resultado = 0;
  if (operacion === "+") {
    resultado = sumar(numero1, numero2);
  }

  if (operacion === "-") {
    resultado = restar(numero1, numero2);
  }

  if (operacion === "*") {
    resultado = multiplicar(numero1, numero2);
  }

  if (operacion === "/") {
    resultado = dividir(numero1, numero2);
  }

  // para acabar debo mostrar el resultado en mi html
  const p = document.createElement("p");
  const value = document.createTextNode(resultado);
  p.appendChild(value);
  const contenedor = document.querySelector("#resultado");
  contenedor.appendChild(p);
}

// function sumar() {
//   const numero1 = document.querySelector("#numero1").value;
//   const numero2 = document.querySelector("#numero2").value;

//   //contenedor para imprimir mi resultado
//   const contenedor = document.querySelector("#resultado");

//   // validar si es que los inputs estan vacios
//   if (numero1 === "" || numero2 === "") {
//     alert("Debe completar los numeros para continuar");
//     //  cuando los datos esten vacio yo debo detener la ejecucion de mi funcion
//     return;
//   }
//   // estamos haciendo la operacion para poder
//   // calcumar la suma de los inputs
//   const suma = +numero1 + +numero2;

//   // como creo una etique p en js?
//   const p = document.createElement("p"); //* <p></p>
//   // como puede asignar un valor a la etiqueta creada?
//   const pValor = document.createTextNode(suma);
//   // como agrego el pValor al p?
//   p.appendChild(pValor);
//   contenedor.appendChild(p);
// }
