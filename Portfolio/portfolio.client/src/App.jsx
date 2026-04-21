import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

//Components
import Navbar from "../src/components/navbar/navbar.jsx";
import Home from "../src/components/home/home.jsx";
import AddProject from "../src/components/project/addProject.jsx";
import ProjectList from "../src/components/project/projectList.jsx";

function App() {
    

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addProject" element={<AddProject />} />
                <Route path="/projectList" element={<ProjectList />} />
            </Routes>
        </>
    );
    
    
}

export default App;