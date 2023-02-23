import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const HomeLayout = () => {
  return (
    <>
      <Header formModal />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
