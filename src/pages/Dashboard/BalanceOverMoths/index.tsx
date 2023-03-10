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
  const { transactions, summary } = React.useContext(TransactionContext);
  const [dataChart, setDataChart] = React.useState({} as DataChartProps);

  React.useEffect(() => {
    const incomes: number[] = [];
    const outcomes: number[] = [];

    for (let i = 0; i < 12; i++) {
      let income = 0;
      let outcome = 0;
      try {
        const currentMonthsTransaction = transactions.filter(
          (t) => new Date(t.date).getMonth() == i
        );
        income = summary(currentMonthsTransaction).income;
        outcome = summary(currentMonthsTransaction).outcome;
      } catch (ex) {
        continue;
      } finally {
        incomes.push(income);
        outcomes.push(outcome);
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
