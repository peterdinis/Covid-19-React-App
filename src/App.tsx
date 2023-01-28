import { Routes, Route } from "react-router-dom";
import {
  AllInfoPage,
  AllStatsPage,
  LandingPage,
  NotFoundPage,
  VaccinatePage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/all" element={<AllInfoPage />} />
      <Route path="/vaccinate" element={<VaccinatePage />} />
      <Route path="/stats" element={<AllStatsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
