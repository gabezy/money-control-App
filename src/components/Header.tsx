import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FormModal } from "./FormModal";
import { TemporaryDrawer } from "./TemporaryDrawer";

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <FormModal open={open} handleClose={handleClose} />
    </Box>
  );
};
