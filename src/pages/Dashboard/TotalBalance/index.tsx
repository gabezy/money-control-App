import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { TransactionContext } from "../../../contexts/TransactionContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Balance",
    },
  },
};

export const TotalBalance = () => {
  const { summary, transactions } = React.useContext(TransactionContext);

  const data = {
    labels: ["Entradas", "Saídas"],
    datasets: [
      {
        label: "R$",
        data: [summary(transactions).income, summary(transactions).outcome],
        backgroundColor: ["#22C55E", "#EF4444"],
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};
