import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import "./Login.css";
import "./Tips.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Quizz from "./pages/Quizz";
import LandingPage from "./pages/LandingPage";
import About from "./pages/Aboutus";
import Tips from "./pages/Tips";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} /> {/* Mengarahkan halaman root ke halaman /landing */}
        <Route path="/landing" element={<LandingPage />} index /> {/* Menjadikan halaman /landing sebagai halaman awal */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
