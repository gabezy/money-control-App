import { Typography } from "@mui/material";
import React from "react";
import { TransactionContext } from "../../../contexts/TransactionContext";
import { LatestTransactions } from "../../Home/LatestTransactions";

export const TransactionHistory = () => {
  const { transactions } = React.useContext(TransactionContext);

  return (
    <div>
      <Typography
        variant="h1"
        sx={{ fontSize: "2.5rem", mt: 2, mb: 4 }}
        align={"center"}
      >
        Histórico Completo
      </Typography>
      <LatestTransactions />
    </div>
  );
};
