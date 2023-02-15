import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

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

export const FormModal = ({ open, handleClose }: FormModalProps) => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Cadastrar transação
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField id="title" label="Título" variant="outlined" />
            <TextField id="category" label="Categoria" variant="outlined" />
            <TextField
              id="value"
              label="Valor"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
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
                />
                <FormControlLabel
                  value="outcome"
                  control={<Radio />}
                  label="Despesa"
                />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              sx={{
                bgcolor: "green",
                color: "white",
                // textTransform: "capitalize",
              }}
              onClick={handleClose}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
