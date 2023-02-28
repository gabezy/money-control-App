import React from "react";
import { Box } from "@mui/material";
import { TransactionContext } from "../../contexts/TransactionContext";
import { Summary } from "./Summary";
import { LatestTransactions } from "./LatestTransactions";

export const Home = () => {
  const { transactions, summary } = React.useContext(TransactionContext);

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
          <Summary boardLabel="Entradas" value={summary(transactions).income} />
          <Summary boardLabel="Saídas" value={summary(transactions).outcome} />
          <Summary boardLabel="Total" value={summary(transactions).total} />
        </Box>
        <LatestTransactions />
      </Box>
    </>
  );
};
