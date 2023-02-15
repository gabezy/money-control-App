import { Box } from "@mui/material";
import React from "react";
import { Board } from "./components/Board";
import { History } from "./components/History";

export const Home = () => {
  return (
    <Box component={"section"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
          marginTop: -6,
        }}
      >
        <Board boardLabel="Entradas" value={6000} />
        <Board boardLabel="Saídas" value={3000} />
        <Board boardLabel="Total" value={6000} />
      </Box>
      <History />
    </Box>
  );
};
