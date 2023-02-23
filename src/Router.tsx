import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { HomeLayout } from "./layouts/HomeLayout";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/history" element={<DashboardLayout />}>
        <Route path="/history" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
