//? Un objeto es una entidad independiente ahora, este tiene propiedades y atributos

//* Atributos de un carro
//! numero de puertas
//! color
//! placa
//! motor
//! cilindro
//! HP

//? Un objeto esta compuesto por un key (llave) y un value (valor)

//? creemos el objeto carro
const carro = {
  color: "azul",
  motor: 1.2,
  modelo: "GTR",
  marca: "Nissan",
  nuevo: true,
};

//? Objeto persona
const persona = {
  edad: 30,
  nombre: "Juanito",
  sexo: "Masculino",
  talla: 1.75,
  estadoCivil: "soltero",
  mayorDeEdad: true,
  dontateDeOrganos: true,
  dni: "722222",
  tatuajes: true,
  nacionalidad: "Peruano",
};

//? como creen que puedo accede al atributo nombre
console.log("nombre", persona.nombre);
console.log("DNI", persona.dni);

//? creen pueda agregar mas atributos?
// esto es una forma de agregar un elemento a un objeto
persona.celuar = "9999999";

console.log(persona);

//! 2da forma de agregar un elemento
//? quiero agregar la profesion de una persona
persona["profesion"] = "Ingeniero";

console.log("PERSONA CON PROFESION", persona);

//?? Creando objeto de la forma antigua
//? Instanciando a la clase Object
//? La clase Object en JS es una clase la cual permite decir que esta variable sera un objeto

const casa = new Object();
casa["color"] = "Rosada";
casa.pintura = "Negro";

console.log("Casa", casa);

//! 3ra forma de crear un objeto sirve para poder definir los keys
const laptop = new Object(),
  modelo = "macbook pro",
  peso = 2.5,
  color = "color",
  ram = "16gb",
  memoria = 512;

// create object phone using new object
// laptop["color"] = "gris";
laptop[color] = "gris";

console.log("laptop", laptop);

// CREEMOS UN OBJETO PARA CELULAR
const celular = {
  modelo: "iPhone 11",
  flexible: false,
  tamano: 6.1,
  gama: "Alta",
  color: "Gris",
  camaras: 2,
  precio: "$ 700",
};

// como puedo cambiar el valor de atributo?
celular.camaras = 4;
celular.memoria = "128gb";

console.log("celular", celular);

// quiero crear una funcion la cual me retorne el nombre la memoria y precio del celular

/* 
celuluar: object
*/
const mostrarDetalleCelular = (celularObjeto) => {
  return `El modelo es ${celularObjeto.modelo} y tiene ${celularObjeto.memoria} de espacio a tan solo ${celularObjeto.precio}`;
};

console.log("objeto celular", mostrarDetalleCelular(celular));

//? Destructuraccion de objetos
const mostrarDetalleCelular2 = (celularObjeto) => {
  const { modelo, memoria, precio } = celularObjeto;
  return `El modelo es ${modelo} y tiene ${memoria} de espacio a tan solo ${precio}`;
};

console.log("objeto celular2", mostrarDetalleCelular2(celular));

//? Creen una funcion la cual me valide si el usuario es de Peru
//? si es de Peru impriman su nickName junto a su nivel,
//? si no es de Peru impran "Oye tu nickname no eres Peruano"

// use destructuracion

// Creemos el objeto usuario
const usuario = {
  nickName: "loquitoProgramador01",
  email: "loqui@gmail.com",
  password: "*******",
  carnetVacuacion: true,
  location: "Peru",
  level: "pro",
  edad: 18,
};

const DefinirUsuarioPeruano = (usuarioObjeto) => {
  const { nickName, location, level } = usuarioObjeto;
  if (location === "Peru") {
    return `${nickName}  ${level}`;
  } else {
    return `Oye tu ${nickName} no eres peruano`;
  }
};

const validarUsuario = (usuarioValidar) => {
  const { nickName, location, level } = usuarioValidar;
  if (location === "Perú") {
    return `Su usuario es ${nickName} y su nivel es ${level}`;
  } else {
    return `Oye tu ${nickName} no eres Peruano`;
  }
};

let validUser = (validarUsuario) => {
  const { location, nickname, level } = validarUsuario;
  return location === "Peru"
    ? `Su ${nickname} y su nivel ${nivel}`
    : `Oye tu ${nickname} no eres peruano`;
};

const validarUsuario = (usuarioObject) => {
  const { nickName, level, location } = usuarioObject;
  return location === "Peru"
    ? `Tu nickName es ${nickName} y tu nivel es ${level}`
    : `Oye ${nickName} tu no eres Peruano`;
};

const validarUsuario = (usuario) => {
  const { location, nickname, nivel } = usuario;
  return location == "Peru"
    ? `Su ${nickname} y su nivel ${nivel}`
    : "nickname no eres peruano";
};

const validar = (usuario) => {
  const { location, nickname, level } = usuario;
  return location === "Peru"
    ? `${nickname} y ${level}`
    : `Oye tu ${nickname} no eres ${location}`;
};

const validarUsario = (usuarioObject) => {
  const { nickname, location, level } = usuarioObject;
  return location === "peru"
    ? `${nickname} es nivel ${level}`
    : `${nickname} no eres peruano`;
};

const validarUsuario = (usuario) => {
  const { nickname, location, level } = usuario;
  return location === "Peru"
    ? `${nickname} ${level}`
    : `No ${nickname} eres peruano`;
};

const nationalityNalidation = (usuario) => {
  const { location, nickName, level } = usuario;
  if (location === "Peru") {
    return `${nickName},${level}`;
  } else {
    return "Tu nickName no es Peruano";
  }
};

const validarUsuario = (validar) => {
  const { nickName, location, level } = validar;
  return location === "Peru"
    ? `${nickName} tu lvl ${level}`
    : "Oye tu nickname no es de Peru";
};

const validarNacionalidad = (usuarioObjecto) => {
  const { nickname, nacionalidad, level } = usuarioObjecto;
  return nacionalidad === "Peru"
    ? `Tu nickname es ${nickname} y tu nivel es ${level}`
    : `Oye ${nickname} tu no eres Peruano`;
};

const validarLocation = (usuario) => {
  const { location, nickName, level } = usuario;
  return location === "Peru"
    ? "su usario es" + nickName + "y su nivel es " + level
    : "No eres peruano";
};

let validarUsuario = (valUsu) => {
  const { location, nickname, nivel } = valUsu;
  return location === "Peru"
    ? `Su ${nickname} y su nivel ${nivel}`
    : "Oye tu nickname no eres peruano";
};

const validacionUser = (usuarioValidez) => {
  const { location, nickname, level } = usuarioValidez;
  return location === "peru"
    ? `${nickname}, ${level}`
    : `oye tu ${nickname} no eres peruano`;
};

const validarDatos = (usuario) => {
  const { nickName, level, location } = usuario;
  return location === "peru"
    ? `${nickName} eres ${level}`
    : "oye no ers peruano";
};

const validarAlUsuario = (usuario) => {
  const { nickname, location, level } = usuario;
  return location === "perú"
    ? `${nickname} eres ${level}`
    : "oye tu eres chileno";
};
