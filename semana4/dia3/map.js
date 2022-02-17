//* Existen metodos (funciones) que nos permite leer arrays y objetos de una forma sencilla
//* .map esta map es un bucle que sirve para poder leer arreglo y lo que lo hace
//* especial es que este retorn un array

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

productos.map((producto, index) => {
  console.log("Indice", index);
  console.log("Producto", producto.price);
});

const nombres = ["Juan", "Pedro", "Maria", "Jose"];

//? el index es el indice que cada elemento
//! recuerden que el indice empieza en 0 y por cada se le suma 1
nombres.map((nombrecito, indicadorcito) => {
  if (indicadorcito > 0) {
    console.log(nombrecito);
  }
});
