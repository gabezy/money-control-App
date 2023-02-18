import React from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { Transaction } from "../../../../reducers/Transaction/reducer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransactionContext } from "../../../../contexts/TransactionContext";
import { FormModalEdit } from "../../../../components/FormModalEdit";

interface FactoryProps {
  transaction: Transaction;
  formatedValue: (value: number) => string;
}

export const Item = ({ transaction, formatedValue }: FactoryProps) => {
  const { deleteTransaction } = React.useContext(TransactionContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <TableRow
        key={transaction.title}
        sx={{ border: 0, "& td": { border: 0 } }}
      >
        <TableCell sx={{ color: "#6B7280" }}>{transaction.title}</TableCell>
        {transaction.type === "income" ? (
          <TableCell sx={{ color: "#22C55E" }}>
            R$ {formatedValue(transaction.value)}
          </TableCell>
        ) : (
          <TableCell sx={{ color: "#d32f2f" }}>
            R$ {formatedValue(transaction.value)}
          </TableCell>
        )}
        <TableCell sx={{ color: "#6B7280" }}>{transaction.category}</TableCell>
        <TableCell sx={{ color: "#6B7280" }}>{"11/11/1245"}</TableCell>
        <TableCell sx={{ color: "#6B7280" }}>
          <IconButton onClick={() => deleteTransaction(transaction.id)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleOpen}>
            <EditIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
      {isOpen && (
        <FormModalEdit
          transaction={transaction}
          open={isOpen}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
