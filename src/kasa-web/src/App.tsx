import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
