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
};

computadora.mostrarDetalle();
computadora.mostrarDetalleCompleto();
computadora2.imprimirDetalle();
