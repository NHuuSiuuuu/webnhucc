import React from "react";
import { Toaster, toast } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Toaster />
      <button onClick={() => toast("Hello")}>toaster</button>
      
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
