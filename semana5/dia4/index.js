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
        backgroundColor: [
          "rgba(0, 255, 265, 0.7)",
          "#f01",
          "#ba1",
          "#dac",
          "#eda",
          "#a34",
          "#234",
        ],
      },
    ],
  },
});

const containerDoughnutChart = document
  .querySelector("#doughnut-chart")
  .getContext("2d");

const dataForChart = {
  labels: ["Computadoras", "Celulares", "Refrigeradoras", "Parlantes"],
  datasets: [
    {
      label: "PRODUCTOS ELECTRONICOS",
      data: [100, 230, 520, 267],
      backgroundColor: ["#f01", "green", "yellow", "orange"],
    },
  ],
};

const config = {
  type: "doughnut",
  data: dataForChart,
};

const donutChart = new Chart(containerDoughnutChart, config);
