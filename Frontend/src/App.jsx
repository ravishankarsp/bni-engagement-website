import react, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  return (
    <>
      <div className="min-h-screen flex bg-slate-50">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

        <div className="flex-1">
          <Navbar activeItem={activeItem} />

          <main className="p-6">
            <h1 className="text-2xl font-bold text-slate-900">{activeItem}</h1>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
