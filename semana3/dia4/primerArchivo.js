const numero1 = 10;
const numero2 = 20;

// recuerden el ; no importa
let resultado = 0;

resultado = numero1 + numero2;

// recuerden
// alert : Es una alerta en el navegador
// console.log : Escribe un mensaje en la consola del navegador
// Resultado: 10 + 20 = 30
// ojo el simbolo + tiene 2 propositos
// 1. Suma siempre cuando sea numeros
// 2. Concatenacion peros si son strings junto a numbers lo que hace es concatenar
console.log("Resultado: " + numero1 + " + " + numero2 + " = " + resultado);

// otra propiedad del console.log poder darle un key a un valor
console.log("Sumatoria:", resultado);

// Existe el console.error y console.warn
// el console.error es para errores
// el console.warn es para advertencias
console.error("Suma Error:", resultado);
