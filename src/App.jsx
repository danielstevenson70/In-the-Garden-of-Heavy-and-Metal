import { Routes, Route } from "react-router";
import { AuthProvider } from "./AuthContext";

import MainLayout from "./layouts/MainLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Home from "./pages/Home";
import SearchBands from "./pages/SearchBands";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedLayout />}>
            <Route path="/searchBand" element={<SearchBands />} />
            <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

