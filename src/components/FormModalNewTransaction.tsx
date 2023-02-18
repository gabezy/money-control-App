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
import { useForm } from "react-hook-form";
import { TransactionContext } from "../contexts/TransactionContext";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, schemaForm } from "./FormModalEdit";

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

interface FormModalProps {
  open: boolean;
  handleClose: () => void;
}

export const FormModalNewTransaction = ({
  open,
  handleClose,
}: FormModalProps) => {
  const { createNewTransaction } = React.useContext(TransactionContext);

  let defaultValues = { title: "", category: "", value: "", type: "" };

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
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
