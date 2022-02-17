//* forEach tambien es un bucle
//* es como una mezcla de map y for
//* pero a diferencia del este no retorna nada
//* Sirve para iterar un arreglo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((numero, index) => {
  return numero * 2;
});

const productos = [
  {
    name: "Laptop",
    price: 1500,
  },
  {
    name: "Celular",
    price: 2300,
  },
  {
    name: "Monitor",
    price: 1000,
  },
];

productos.forEach((producto) => {
  // dentro del forEach podemos hacer lo que queramos
  console.log(producto);
});

productos.forEach((producto) => console.log(producto.name));
