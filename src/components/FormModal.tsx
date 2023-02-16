import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { TransactionContext } from "../contexts/TransactionContext";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormModalProps {
  open: boolean;
  handleClose: () => void;
}

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

const schema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  value: z.string().regex(valueRegex),
  type: z.string().refine((val) => ["income", "outcome"].includes(val)),
});

export type schemaForm = z.infer<typeof schema>;

export const FormModal = ({ open, handleClose }: FormModalProps) => {
  const { transactions, createNewTransaction } =
    React.useContext(TransactionContext);
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      category: "",
      value: "0",
      type: "",
    },
  });

  const handleCreateNewTransation = (data: schemaForm) => {
    createNewTransaction(data);
    reset();
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Cadastrar transação
          </Typography>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            onSubmit={handleSubmit(handleCreateNewTransation)}
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
                  <InputAdornment position="start">$</InputAdornment>
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
