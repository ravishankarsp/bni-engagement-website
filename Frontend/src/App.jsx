import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Member_Performance from "./Pages/Member_Performance";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <BrowserRouter>
      <div className="min-h-screen flex bg-slate-50">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

        <div className="flex-1">
          <Navbar activeItem={activeItem} />

          <main className="p-6">
            <Routes>
              <Route path="/dashboard" element="Dashboard" />
              <Route
                path="/member-performance"
                element={<Member_Performance />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
