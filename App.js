import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import VisualizerPage from "./pages/VisualizerPage";
import AlgorithmDetails from "./pages/AlgorithmDetails";
import Comparison from "./pages/Comparison";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Global Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualizer" element={<VisualizerPage />} />
        <Route path="/algorithm/:algo" element={<AlgorithmDetails />} />
        <Route path="/compare" element={<Comparison />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
