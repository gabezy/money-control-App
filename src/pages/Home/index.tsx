import React from "react";
import { Box } from "@mui/material";
import { TransactionContext } from "../../contexts/TransactionContext";
import { Board } from "./Board";
import { LatestTransactions } from "./LatestTransactions";

interface valuesPros {
  totalIncome: number;
  totalOutcome: number;
  totalBalance: number;
}

export const Home = () => {
  const { transactions, totalIncomeAndOutcome } =
    React.useContext(TransactionContext);
  const [values, setValues] = React.useState({} as valuesPros);

  React.useEffect(() => {
    const { totalIncome, totalOutcome, totalBalance } = totalIncomeAndOutcome();
    setValues({
      totalIncome,
      totalOutcome,
      totalBalance,
    });
  }, [transactions]);

  return (
    <>
      <Box component={"section"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 4,
            marginTop: -6,
          }}
        >
          <Board boardLabel="Entradas" value={values.totalIncome} />
          <Board boardLabel="Saídas" value={values.totalOutcome} />
          <Board boardLabel="Total" value={values.totalBalance} />
        </Box>
        <LatestTransactions />
      </Box>
    </>
  );
};
