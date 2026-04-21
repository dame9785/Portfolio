import "./home.css";
import { FiArrowDown } from "react-icons/fi";
import { getProjects } from "../../services/projectService";
import { useRef, useEffect, useState } from "react";

import ProjectImageUrl from "../../assets/example-project.jpg";
function Home() {
    const linkContentRef = useRef(null);
    const [projects, setProjects] = useState([]);


    //Scroll down on click arrow-down
    const scrollToLinks = () => {
        if (!linkContentRef.current) return;

        const offset = 137;
        const y =
            linkContentRef.current.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    //Get projects
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadData();
    }, []);


    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex justify-center items-center container hero-content-parent">
                <div className="hero-content-children flex flex-col items-center">
                    <h1 className="hero-title">David Söderberg</h1>

                    <span className="text-lg text-white hero-span hero-title-children">
                        Fullstack developer
                    </span>

                    <hr className="hero-divider" />

                    <button id="scrolldown-btn" onClick={scrollToLinks}>
                        <FiArrowDown className="text-3xl text-white" />
                    </button>
                </div>
            </div>

            <div
                ref={linkContentRef}
                id="link-content-parent"
                className="container flex flex-col items-center"
            >
                <div className="flex gap-10 flex-wrap justify-center items-center">
                    {projects.map((item) => (
                        <div key={item.id} className="link-content-box">
                            <div className="image-box">
                                <img src={ProjectImageUrl} alt={item.title} />
                            </div>

                            <h3 className="project-title">{item.title}</h3>

                            <div className="project-divider"></div>

                            <p className="project-description">{item.description}</p>

                            <div className="project-buttons">
                                <button className="btn-primary">Live</button>
                                <button className="btn-secondary">GitHub</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;