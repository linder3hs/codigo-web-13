function validarSiEsNumero(numero, tipo) {
  return isNaN(numero) ? `Mensaje Error: no se puede ${tipo}` : numero;
}

function sumar(numero1, numero2) {
  const suma = +numero1 + +numero2;

  return validarSiEsNumero(suma, "sumar");
}

function restar(numero1, numero2) {
  const calcResta = +numero1 - +numero2;

  return validarSiEsNumero(calcResta, "restar");
}

function multiplicar(numero1, numero2) {
  const calcMultiplicacion = +numero1 * +numero2;

  return validarSiEsNumero(calcMultiplicacion, "multiplicar");
}

function dividir(numero1, numero2) {
  if (+numero2 === 0) {
    // termina la ejeccion de la funcion y retorn ese string
    return "Error: no se puede dividir por 0";
  }

  const calcDivision = +numero1 / +numero2;
  return validarSiEsNumero(calcDivision, "dividir");
}
