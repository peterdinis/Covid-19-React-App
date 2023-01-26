import { Routes, Route } from "react-router-dom";
import { AllStatsPage, LandingPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/stats" element={<AllStatsPage />} />
    </Routes>
  )
}

export default App;