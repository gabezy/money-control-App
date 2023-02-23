import { Box } from "@mui/material";
import { BalanceOverMonths } from "./BalanceOverMoths";
import { TotalBalance } from "./TotalBalance";
import { TransactionHistory } from "./TransactionsHistory";

export const Dashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", mb: 5 }}>
        <Box sx={{ flex: "2" }}>
          <BalanceOverMonths />
        </Box>
        <Box sx={{ flex: "1" }}>
          <TotalBalance />
        </Box>
      </Box>
      <TransactionHistory />
    </>
  );
};
