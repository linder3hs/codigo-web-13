//! Creen un objeto persona

//? creen que un objeto puede contener una function?
const persona = {
  nombre: "Juanito",
  edad: 30,
  talla: 1.5,
  estadoCivil: "casada",
  calcularEdad: function () {
    console.log("calculando la edad");
  },
};

//* 1ra forma de llamar a una funcion que esta dentro de un objeto
console.log("1er forma");
persona.calcularEdad();

//* 2da forma es parecida, sin embargo no se usan los parentesis
console.log("2da forma");
//* Esta solo funciona si la funcion tiene un return
persona.calcularEdad;

// TODO: Ejemplo
//? Vamos a ver a como acceder a las propiedades del objeto desde una
//? function interna

//! this va a permitir accede a los datos del objeto padre
const computadora = {
  color: "azul",
  marca: "HP",
  nuevo: true,
  mostrarDetalle: function () {
    // color no pertenece al ambito de la funcion
    console.log("color", this.color);
  },
  mostrarDetalleCompleto: function () {
    //! En los arrow function this no existe
    console.log(
      "Detalle",
      `Color: ${this.color} Marca: ${this.marca} Es nuevo? ${
        this.nuevo ? "Si" : "No"
      }`
    );
  },
};

const computadora2 = {
  color: "amarillo",
  marca: "Lenovo",
  nuevo: false,
  imprimirDetalle: function () {
    console.log(this.color);
  },
  mostrarDetalle: function () {
    // color no pertenece al ambito de la funcion
    console.log("color", this.color);
  },
};

computadora.mostrarDetalle();
computadora.mostrarDetalleCompleto();
computadora2.imprimirDetalle();
computadora2.mostrarDetalle();

//? Objetos con array
const alumno = {
  nombre: "Juanito",
  notas: [10, 5, 8, 9],
  cursos: ["HTML", "CSS", "JS", "React"],
};

console.log("Notas", alumno.notas);

//? Crear un array de objejos
const alumnos = [
  {
    nombre: "Luciano",
    edad: 18,
    promedio: 15,
  },
  {
    nombre: "El Pepe",
    edad: 21,
    promedio: 14,
    direccin: "Av siempre 123",
  },
];

// como puedo imprimir la nota de Luciano
console.log(`Nota de ${alumnos[0].nombre}`, alumnos[0].promedio);

//* En una web siempre estan presentes los array de objetos

//* creemos una array de laptops

//? Esta estructura tambien es conocida como JSON
//? JSON: Es un formato de archivos
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

console.log(laptops);

//? Creen que los keys puedan ser numeros?
const listaDeUtiles = {
  1: "Hojas bond",
  2: "Plumones",
  3: "Lapiceros",
};

console.log(listaDeUtiles["1"]);
console.log(listaDeUtiles["2"]);

//? Objetos dentro de objetos
const components = {
  nombre: "Lenovo IPad",
  caracteristicas: {
    ram: 16,
    tarjeta: "3090 super",
    memoria: 512,
    extra: {
      pantalla: "4k",
    },
    111: {
      teclado: "Español",
    },
  },
};

console.log("Tarjeta", components.caracteristicas.tarjeta);
console.log("Pantalla", components.caracteristicas.extra.pantalla);

// como imprimos el valor de teclado
console.log("Teclado", components.caracteristicas["111"].teclado);

//! Crear el array de objetos del link que comparti, ojo solo con 3 objetos
//https://www.bhphotovideo.com/c/buy/macbook-pro-16-2021/ci/51717
