import React from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { Transaction } from "../../../../reducers/Transaction/reducer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransactionContext } from "../../../../contexts/TransactionContext";
import { FormModalEdit } from "../../../../components/FormModalEdit";
import { format } from "date-fns";

interface FactoryProps {
  transaction: Transaction;
  formatedValue: (value: number) => string;
  editable?: boolean;
}

export const Item = ({
  transaction,
  formatedValue,
  editable,
}: FactoryProps) => {
  const { deleteTransaction } = React.useContext(TransactionContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const formatDate = (date: Date) => {
    return format(new Date(transaction.date), "dd/MM/yyyy");
  };
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
        <TableCell sx={{ color: "#6B7280" }}>
          {formatDate(transaction.date)}
        </TableCell>
        {editable && (
          <TableCell sx={{ color: "#6B7280" }}>
            <IconButton onClick={() => deleteTransaction(transaction.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={handleOpen}>
              <EditIcon fontSize="small" />
            </IconButton>
          </TableCell>
        )}
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
