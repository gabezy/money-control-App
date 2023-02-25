import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { TransactionContext } from "../../../contexts/TransactionContext";
import { Item } from "./Item";

interface TransactionHistoryProps {
  editable?: boolean;
}

export const LatestTransactions = ({ editable }: TransactionHistoryProps) => {
  const { transactions, formatValue } = React.useContext(TransactionContext);

  if (transactions.length > 0)
    return (
      <TableContainer sx={{ marginBlock: 3 }}>
        <Table aria-label="last transactions" sx={{ color: "#6B7280" }}>
          <TableHead>
            <TableRow
              sx={{
                border: 0,
                "& th": { border: 0, fontWeight: "bold", color: "inherit" },
              }}
            >
              <TableCell>Título</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((T) => (
              <Item
                key={T.id}
                transaction={T}
                formatedValue={formatValue}
                editable={editable}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  else
    return (
      <Box
        sx={{
          marginBlock: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#44403C" }}>
          Você ainda não tem transação cadastradas
        </Typography>
        <Typography sx={{ color: "#57534E" }}>
          Crie transações e organize sua vida financeira
        </Typography>
      </Box>
    );
};
