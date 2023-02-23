import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Variação",
    },
  },
};

const labels = ["Jan", "Fev", "Mar", "Maio"];

// #EF4444;
const data = {
  labels,
  datasets: [
    {
      label: "Entradas",
      data: labels.map(() => faker.datatype.number({ min: 10, max: 10000 })),
      backgroundColor: "#22C55E",
    },
    {
      label: "Saída",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      backgroundColor: "#EF4444",
    },
  ],
};

export const BalanceOverMonths = () => {
  return <Bar options={options} data={data} />;
};
