import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/dashboard/Home";
import Expense from "./pages/dashboard/Expense";
import Income from "./pages/dashboard/Income";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> // default route
        <Route path="/expense" element={<Expense />} /> // expense route
        <Route path="/income" element={<Income />} /> // income route
        <Route path="*" element={<NotFound />} /> // catch all route for undefined paths
      </Routes>
    </Router>
  );
};

export default App;
