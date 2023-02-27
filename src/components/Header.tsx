import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { NewTransactionModal } from "./NewTransactionModal";
import { TemporaryDrawer } from "./TemporaryDrawer";

interface HeaderProps {
  formModal?: boolean;
}

export const Header = ({ formModal }: HeaderProps) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (formModal)
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ height: "200px", bgcolor: "#3730A3" }}>
          <Container disableGutters>
            <Toolbar sx={{ marginBlock: 2 }}>
              <TemporaryDrawer />
              <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
                Logo
              </Typography>
              <Button
                variant="contained"
                sx={{ bgcolor: "#6366F1" }}
                onClick={handleOpen}
              >
                Nova Transação
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
        <NewTransactionModal open={open} handleClose={handleClose} />
      </Box>
    );
  else
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ height: "200px", bgcolor: "#3730A3" }}>
          <Container disableGutters>
            <Toolbar sx={{ marginBlock: 2 }}>
              <TemporaryDrawer />
              <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
                Logo
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
};
