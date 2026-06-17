import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen flex bg-slate-50">
        <Sidebar />

        <div className="flex-1">
          <Navbar />

          <main className="p-6">
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
