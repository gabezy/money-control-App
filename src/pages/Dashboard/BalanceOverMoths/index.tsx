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
import { Bar } from "react-chartjs-2";
import { TransactionContext } from "../../../contexts/TransactionContext";

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

const labels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

interface DataChartProps {
  incomes: number[];
  outcomes: number[];
}

export const BalanceOverMonths = () => {
  const { transactions, totalIncomeAndOutcome } =
    React.useContext(TransactionContext);
  const [dataChart, setDataChart] = React.useState({} as DataChartProps);

  React.useEffect(() => {
    const incomes: number[] = [];
    const outcomes: number[] = [];

    for (let i = 0; i < 12; i++) {
      try {
        const currentMonthsTransaction = transactions.filter(
          (t) => new Date(t.date).getMonth() == i
        );

        console.log("Month " + (i + 1), currentMonthsTransaction);
        console.log(totalIncomeAndOutcome(currentMonthsTransaction));

        const { totalIncome, totalOutcome } = totalIncomeAndOutcome(
          currentMonthsTransaction
        );
        incomes.push(totalIncome);
        outcomes.push(totalOutcome);
      } catch (ex) {
        incomes.push(0);
        outcomes.push(0);
      }
    }

    setDataChart({ incomes: incomes, outcomes: outcomes });
  }, [transactions, setDataChart]);

  const data = {
    labels,
    datasets: [
      {
        label: "Entradas",
        data: dataChart.incomes,
        backgroundColor: "#22C55E",
      },
      {
        label: "Saída",
        data: dataChart.outcomes,
        backgroundColor: "#EF4444",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
