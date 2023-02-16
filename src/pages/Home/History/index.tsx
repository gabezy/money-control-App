import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TransactionContext } from "../../../contexts/TransactionContext";
import { FactoryHistory } from "./FactoryHistory";

export const History = () => {
  const { transactions, formatValue } = React.useContext(TransactionContext);

  if (transactions.length)
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
            <FactoryHistory rows={transactions} formatedValue={formatValue} />
          </TableBody>
        </Table>
      </TableContainer>
    );
  else return null;
};
