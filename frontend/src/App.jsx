import React from "react";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Toaster />

      <BrowserRouter>
        <Routes>
          {/* Route Home */}
          <Route path="/" element={<HomePage />} />

          {/* Route NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
