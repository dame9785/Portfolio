import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

//Components
import Navbar from "../src/components/navbar/navbar.jsx";
import Home from "../src/components/home/home.jsx";

function App() {
    

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
    
    
}

export default App;