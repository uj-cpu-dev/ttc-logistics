import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import TrackPackage from "../pages/TrackPackage";

const AppRouter = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* --- Navbar always visible --- */}
        <NavBar />

        {/* --- Page Content --- */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track" element={<TrackPackage />} />
          </Routes>
        </main>

        {/* --- Footer always visible --- */}
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;