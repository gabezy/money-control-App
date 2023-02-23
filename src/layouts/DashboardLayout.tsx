import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const DashboardLayout = () => {
  return (
    <>
      <Header formModal={false} />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
