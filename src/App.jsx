import { Routes, Route } from "react-router";
import { AuthProvider } from "./AuthContext";

import MainLayout from "./layouts/MainLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Home from "./pages/Home";
import SearchBands from "./pages/SearchBands";
import ShotInTheDark from "./pages/ShotInTheDark";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";


export default function App() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });
        const data = await res.json();
        setResponse(data.output);
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask the AI something..."
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>AI says: {response}</p>}

      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/searchBand" element={<SearchBands />} />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

//make a drop box for which path to take 

