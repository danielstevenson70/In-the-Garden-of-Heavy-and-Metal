import { Routes, Route } from "react-router";
import { AuthProvider } from "./AuthContext";
import React, { useState } from 'react';

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
        const res = await fetch(`${import.meta.env.VITE_API_URL}/generate`, {
           //the import meta needs to be generated and not have it just /generate 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });
        const data = await res.json();
        setResponse(data.output);
    };

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/searchBands" element={<SearchBands />} />
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

