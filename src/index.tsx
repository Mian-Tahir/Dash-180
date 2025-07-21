import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Design } from "./screens/Design/Design";
 import TermsAndConditionsSection from "./screens/Design/sections/TermsandConditionsSection/TermsAndConditionsSection";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Design />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsSection />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
