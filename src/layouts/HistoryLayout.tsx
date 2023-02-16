import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";

export const HistoryLayout = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
