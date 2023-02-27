import React from "react";
import {
  Box,
  Button,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Transaction } from "../reducers/Transaction/reducer";
import { TransactionContext } from "../contexts/TransactionContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
  borderRadius: 2,
};

const valueRegex = /[0-9]+/;

export const schema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  value: z.string().regex(valueRegex),
  type: z.string().refine((val) => ["income", "outcome"].includes(val)),
});

export type schemaForm = z.infer<typeof schema>;

interface EditTransactionModalProps {
  transaction: Transaction;
  open: boolean;
  handleClose: () => void;
}

export const EditTransactionModal = ({
  transaction,
  open,
  handleClose,
}: EditTransactionModalProps) => {
  const { editTransaction } = React.useContext(TransactionContext);

  const defaultValues: schemaForm = {
    title: transaction.title,
    category: transaction.category,
    type: transaction.type,
    value: transaction.value.toFixed(2).replace(".", ","),
  };

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleEditCurrentTransaction = (data: schemaForm) => {
    editTransaction(data, transaction.id);
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <DialogTitle
            sx={{
              p: 0,
              paddingBottom: 2,
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Cadastrar transação
          </DialogTitle>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            onSubmit={handleSubmit(handleEditCurrentTransaction)}
          >
            <TextField
              id="title"
              label="Título"
              variant="outlined"
              {...register("title")}
            />
            <TextField
              id="category"
              label="Categoria"
              variant="outlined"
              {...register("category")}
            />
            <TextField
              id="value"
              label="Valor"
              inputMode="numeric"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
              {...register("value")}
            />
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="type"
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <FormControlLabel
                  value="income"
                  control={<Radio />}
                  label="Entrada"
                  {...register("type")}
                />
                <FormControlLabel
                  value="outcome"
                  control={<Radio />}
                  label="Despesa"
                  {...register("type")}
                />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              sx={{
                bgcolor: "green",
                color: "white",
                fontWeight: "bold",
                "&:hover": { bgcolor: "green" },
              }}
            >
              Cadastrar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
