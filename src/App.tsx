import { Routes, Route } from "react-router-dom";
import {
  AllStatsPage,
  LandingPage,
  NotFoundPage,
  VaccinatePage,
  VariantsPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/vaccinate" element={<VaccinatePage />} />
      <Route path="/stats" element={<AllStatsPage />} />
      <Route path="/variants" element={<VariantsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
