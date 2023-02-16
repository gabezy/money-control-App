import { Route, Routes } from "react-router-dom";
import { HistoryLayout } from "./layouts/HistoryLayout";
import { HomeLayout } from "./layouts/HomeLayout";
import { Home } from "./pages/Home";
import { History } from "./pages/Home/History";

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
