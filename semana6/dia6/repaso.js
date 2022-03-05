const persona = {
  nombre: "Juan",
  apellido: "Perez",
  direccion: "Av siempre viva 123",
  telefono: "999999",
  edad: 33,
};

// como puedo obtener el nombre y la edad usando destructuracion?
const { nombre, edad } = persona;
console.log(nombre, edad);

// como puedo obtener el telefono, la edad y el apellido usando destructuracion?
const { telefono, apellido } = persona;
console.log(telefono);
console.log(apellido);
console.log(edad);

// vamos a recordar las formas de poder declarar una funcion async
//! Usando function
async function nombreFuncion() {
  const res = await fetch();
}

//! Usando arrow function
const arrowFunction = async () => {
  const res = await fetch();
};

//! Usando una funcion anonima
const anonima = async function () {
  const res = await fetch();
};

//! Usar async dentro un map forEach filter find findIndex
const productos = ["Celular", "TV", "Mouse", "Monitor", "Teclado"];

//! usando async en un map
productos.map(async (producto) => {
  console.log(producto);
});

productos.forEach(async (producto) => {
  console.log(producto);
});

const filro = productos.filter(
  async (producto) => (await producto) === "Mouse"
);

const buscador = productos.find(async (producto) => (await producto) === "TV");

const buscarIndice = productos.findIndex(
  async (producto) => (await producto) === "Monitor"
);
