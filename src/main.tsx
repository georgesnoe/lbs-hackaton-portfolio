import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Edition from "./pages/Edition";
import Preview from "./pages/Preview";
import { BrowserRouter, Routes, Route } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Edition />} path="/edition" />
        <Route element={<Preview />} path="/" />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
