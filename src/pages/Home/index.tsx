import React from "react";
import { Box } from "@mui/material";
import { TransactionContext } from "../../contexts/TransactionContext";
import { Transaction } from "../../reducers/Transaction/reducer";
import { Board } from "./Board";
import { LatestTransactions } from "./LatestTransactions";
import { TemporaryDrawer } from "../../components/TemporaryDrawer";
import { Header } from "../../components/Header";

interface valuesPros {
  income: number;
  outcome: number;
  total: number;
}

export const Home = () => {
  const { transactions } = React.useContext(TransactionContext);
  const [values, setValues] = React.useState({} as valuesPros);

  const calcTypeTransaction = (type: string, transactions: Transaction[]) => {
    return transactions
      .filter((transaction) => transaction.type === type)
      .reduce((acc, current) => {
        return acc + current.value;
      }, 0);
  };

  React.useEffect(() => {
    const income = calcTypeTransaction("income", transactions);
    const outcome = calcTypeTransaction("outcome", transactions);
    const total = income - outcome;
    setValues({
      income,
      outcome,
      total,
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
          <Board boardLabel="Entradas" value={values.income} />
          <Board boardLabel="Saídas" value={values.outcome} />
          <Board boardLabel="Total" value={values.total} />
        </Box>
        <LatestTransactions />
      </Box>
    </>
  );
};
