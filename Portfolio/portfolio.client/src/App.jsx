import './App.css';
import { Routes, Route } from "react-router-dom";

//Components
import Navbar from "../src/components/navbar/Navbar.jsx";
import Home from "../src/components/home/Home.jsx";
import AddProject from "../src/components/project/AddProject.jsx";
import ProjectList from "../src/components/project/ProjectList.jsx";

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