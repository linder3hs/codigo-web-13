/**
 * chart de tipo bar
 */
const contenedorBarChart = document
  .querySelector("#bar-chart")
  .getContext("2d");

const barChart = new Chart(contenedorBarChart, {
  type: "bar",
  data: {
    labels: [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Numero de usuarios por dia",
        data: [20, 40, 10, 100, 50, 75, 200],
        borderWidth: 3,
        borderColor: "#f01",
        backgroundColor: "#ab1",
      },
    ],
  },
});
