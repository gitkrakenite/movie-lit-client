import "./App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Create from "./pages/Create";
import Movie from "./pages/Movie";

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-300 min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/review/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
