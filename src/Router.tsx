import { Route, Routes } from "react-router-dom";
import { HistoryLayout } from "./layouts/HistoryLayout";
import { HomeLayout } from "./layouts/HomeLayout";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/history" element={<HistoryLayout />}>
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};
