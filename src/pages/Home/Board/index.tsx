import React from "react";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { TransactionContext } from "../../../contexts/TransactionContext";

interface BoardProps {
  boardLabel: "Entradas" | "Saídas" | "Total";
  value: number;
}

export const Board = ({ boardLabel, value }: BoardProps) => {
  const { formatValue } = React.useContext(TransactionContext);

  const formattedValue = value ? formatValue(value) : formatValue(0);

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        bgcolor: "#F9FAFB",
        border: "none",
        outline: "none",
        p: 3,
        "&:last-child": { bgcolor: "#22C55E", color: "#F9FAFB" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component={"span"}>{boardLabel}</Typography>
        {boardLabel === "Entradas" && (
          <ArrowCircleUpIcon color="success" fontSize="medium" />
        )}
        {boardLabel === "Saídas" && (
          <ArrowCircleDownIcon color="error" fontSize="medium" />
        )}
        {boardLabel === "Total" && <AttachMoneyIcon fontSize="medium" />}
      </Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: 1 }}>
        R$ {formattedValue}
      </Typography>
    </Paper>
  );
};
