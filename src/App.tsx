import { Routes, Route } from "react-router-dom";
import { AllStatsPage, LandingPage, VaccinatePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/vaccinate" element={<VaccinatePage />} />
      <Route path="/stats" element={<AllStatsPage />} />
    </Routes>
  )
}

export default App;