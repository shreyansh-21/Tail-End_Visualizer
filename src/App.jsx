import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisualizerPage from "./pages/VisualizerPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/visualize" element={<VisualizerPage />} />
    </Routes>
  );
}