//* map => crea un nuevo array con los elementos del array original
//* forEach => itera sobre cada elemento del array

const mascotas = [
  { nombre: "Pulga", edad: 2 },
  { nombre: "Pug", edad: 12 },
  { nombre: "Gatito", edad: 15 },
  { nombre: "Perro", edad: 4 },
  { nombre: "Araña", edad: 8 },
  { nombre: "Burro", edad: 1 },
  { nombre: "Conejo", edad: 5 },
];

//* quiero que a la edad de las mascotas se le sume 2
//TODO: Solucion con map

// [
//   { nombre: "Pulga", edad: 4 },
//   { nombre: "Pug", edad: 14 },
//   { nombre: "Gatito", edad: 17 },
//   { nombre: "Perro", edad: 6 },
//   { nombre: "Araña", edad: 10 },
//   { nombre: "Burro", edad: 3 },
//   { nombre: "Conejo", edad: 7 },
// ];

const mascotasEdadSumada = mascotas.map((mascota) => {
  return {
    nombre: mascota.nombre,
    edad: mascota.edad + 2,
  };
});

console.log(mascotasEdadSumada);

//TODO: Solucion con forEach

const nuevoArregloMascota = [];

mascotas.forEach((mascota) => {
  nuevoArregloMascota.push({
    nombre: mascota.nombre,
    edad: mascota.edad + 2,
  });
});

console.log("mascotasEdadSumada2", nuevoArregloMascota);

console.log("============ Solucion alterna ============");
const nuevasMascotas = mascotas.map((mascota) => mascota.edad + 2);
// imprime arreglo
// [4, 14, 7...7]
console.log(nuevasMascotas);

//* quiero imprimir solo las mascotas que mas de 5 años?
//* filter es un bucle hermano de map, porque filter al igual que map retorna un array
//* usaremos filter cuando queramos filtrar informacion
const mascotasMayores = mascotas.filter((mascota) => mascota.edad > 5);
console.log("mascotasMayores", mascotasMayores);
//! Tares: Usando filter quiero que filtren a las mascotas que tengan la edad par
const mascotaPares = mascotas.filter((mascota) => mascota.edad % 2 === 0);

// const filtrandoMascotas = mascotas.filter((mascota, index) => {
//   if (mascota.edad > 5) {
//     console.log("mascota mayor a 5");
//     return "mascota mayor a 5";
//   } else {
//     console.log("mascota menor a 5");
//     return "mascota menor a 5";
//   }
// });

// console.log("filtrandoMascotas");
// console.log(filtrandoMascotas);

const cursos = ["HTML", "CSS", "JS", "PHP", "Python"];
//! recuende que los bucles se aplican a los arreglos(array)
const cursosFiltrados = cursos.filter(
  (curso) => curso === "CSS" || curso === "JS"
);
console.log(cursosFiltrados);

const arregloCursos = [
  {
    nombre: "React JS",
    tec: "JS",
  },
  {
    nombre: "django",
    tec: "Python",
  },
  {
    nombre: "Angular",
    tec: "JS",
  },
  {
    nombre: "Flask",
    tec: "Python",
  },
  {
    nombre: "Laravel",
    tec: "PHP",
  },
];
// quiero que creen 3 variables y en cada variable filtren cada tec
//cursosJS
//cursosPython
//cursosPHP

const filterCursosTec = (arrayCursos, tecFiltro) => {
  return arrayCursos.filter((curso) => curso.tec === tecFiltro);
};

const cursoJS = filterCursosTec(arregloCursos, "JS");
const cursoPython = filterCursosTec(arregloCursos, "Python");
const cursoPHP = filterCursosTec(arregloCursos, "PHP");

console.log("Curso JS", cursoJS);
console.log("Curso Python", cursoPython);
console.log("Curso PHP", cursoPHP);
