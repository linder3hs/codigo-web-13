//* find, es de la familia, find solo un dato
//* find es parecido filter, recordemos que filter retorna un array mientras que
//* retorna el primer dato que en la condicion

const edades = [10, 11, 22, 32, 50, 34];

const mayores30 = edades.find((edad) => edad > 30);
//? Recordemos que find solo retorna 1 dato
//? En este caso find esta buscando en el arreglo edades la edad que sea mayor a 30
//? El primer caso que cumple con esa condicion es 32, por ende al encontrar el primer datos que cumple
//? la condicion find termina su ejecucion y devulve como resultado al numero 32
console.log(mayores30);

//* find y filter necesitan una condicion si no solo iteran el elemento
//? Usen find cuando quieran encontrar un solo dato
const finder = edades.find((edad, index) => console.log(edad));

const products2 = [
  { nombre: "Laptop", categoria: "Computo" },
  { nombre: "Licuadora", categoria: "Electro" },
  { nombre: "all in one", categoria: "Computo" },
  { nombre: "refri", categoria: "Electro" },
];

const filtro = products.find((product) => product.categoria === "Computo");
console.log(filtro);

const alumnos = [
  ["Pepe", "Patricia", "Juan", "Luis", "Paco"],
  ["Leonardo", "Armando", "Karina"],
];

//* quiero una funcion que reciba el nombre de un alumno y me diga si existe en lista
const buscarAlumno = (arrayAlumnos, nombre) => {
  // forEach no puede ser detenido, el return o el break no detiene al forEach
  for (let i = 0; i < arrayAlumnos.length; i++) {
    const filtro = arrayAlumnos[i].find((alumno) => alumno === nombre);
    // findIndex es lo mismo que find sin embargo este retorna el indice
    const num = arrayAlumnos[i].findIndex((alumno) => alumno === nombre);
    // si existe
    if (filtro) {
      return num;
    }
  }

  return false;
};

console.log("buscar", buscarAlumno(alumnos, "Juan"));

const laptops = [
  {
    marca: "Lenovo",
    imagen: "https://logo.com",
    nombre: "Ide Centre AIO I3",
    vendedor: "Falabella",
    precioOferta: 1599,
    precioNormal: 3599,
    calificacion: 2,
    caracteristicas: {
      procesador: "i3",
      tarjetaDeVideo: "integrada",
      discoDuro: "1TB",
      discoDuroSolido: "no aplica",
    },
  },
  {
    marca: "Acer",
    imagen: "https://logo.com",
    nombre: "AN515 15.6",
    vendedor: "Falabella",
    precioOferta: 3399,
    precioNormal: 4999,
    calificacion: 5,
    caracteristicas: {
      procesador: "i5",
      tarjetaDeVideo: "GTX 1650",
      discoDuro: "No tiene",
      discoDuroSolido: "256gb",
    },
  },
];
