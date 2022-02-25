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
// Estos es para los datos
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
// Esto es para crear el tipo y dar la configuracion de datos
const config = {
  type: "doughnut",
  data: dataForChart,
};
// Esto es para la creacion
const donutChart = new Chart(containerDoughnutChart, config);

const containerLineChart = document
  .querySelector("#lineal-chart")
  .getContext("2d");

const configLineal = {
  type: "line",
  data: dataForChart,
};

const lineChart = new Chart(containerLineChart, configLineal);

const containerBubbleChart = document
  .querySelector("#bubble-chart")
  .getContext("2d");
// he tomado a dataForCharty estoy accediendo a la propiedad data y cambio su valor
dataForChart.datasets[0].data = [
  {
    x: 20,
    y: 30,
    r: 15,
  },
  {
    x: 40,
    y: 10,
    r: 10,
  },
  {
    x: 80,
    y: 10,
    r: 10,
  },
];

const configBubble = {
  type: "bubble",
  data: dataForChart,
};

const bubbleChart = new Chart(containerBubbleChart, configBubble);

// Polar chart
const containerPolarChart = document
  .querySelector("#polar-chart")
  .getContext("2d");

dataForChart.datasets[0].data = [300, 249, 321, 278];

const configPolar = {
  type: "polarArea",
  data: dataForChart,
};

const polarChart = new Chart(containerPolarChart, configPolar);

const containerRadarChart = document.querySelector("#radar-chart");
const configRadarChart = {
  type: "radar",
  data: dataForChart,
};

const radarChart = new Chart(containerRadarChart, configRadarChart);
