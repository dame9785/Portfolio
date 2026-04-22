import "./Home.css";
import {FiArrowDown, FiExternalLink, FiGithub} from "react-icons/fi";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { getProjects } from "../../services/projectService";
import { useRef, useEffect, useState } from "react";
import ProjectImageUrl from "../../assets/example-project.jpg";

function Home() {
    const linkContentRef = useRef(null);
    const [projects, setProjects] = useState([]);

    const scrollToLinks = () => {
        if (!linkContentRef.current) return;

        const offset = 110;
        const y =
            linkContentRef.current.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

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
        <main className="home-page">

            {/* BACKGROUND ICONS */}
            <div className="bg-icons">
                <FaReact className="bg-icon react-icon" />
                <FaHtml5 className="bg-icon html-icon" />
                <FaCss3Alt className="bg-icon css-icon" />
            </div>

            {/* HERO */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">David Söderberg</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <span className="hero-span hero-title-children">
                                Fullstack developer
                            </span>
                        </div>
                        <div className="col-md-12 flex gap-3 text-center justify-content-center p-5">
                            <FaFacebook className="fa-social-logo" />
                            <FaInstagram className="fa-social-logo" />
                            <FaTwitter className="fa-social-logo" />
                            <FaLinkedin className="fa-social-logo" />
                            <FiGithub className="fa-social-logo" />
                        </div>
                    </div>
                    

                    <hr className="hero-divider" />

                    <button id="scrolldown-btn" onClick={scrollToLinks}>
                        <FiArrowDown className="arrow-icon" />
                    </button>
                </div>
            </section>

            {/* PROJECTS */}
            <section
                ref={linkContentRef}
                className="projects-section container"
            >
                <h2 className="projects-heading">Projects</h2>

                <div className="projects-grid">
                    {projects.map((item) => (
                        <div key={item.id} className="link-content-box">

                            <div className="image-box">
                                <img src={ProjectImageUrl} alt={item.title} />
                            </div>

                            <h3 className="project-title">{item.title}</h3>

                            <div className="project-divider"></div>

                            <p className="project-description">
                                {item.description}
                            </p>

                            <div className="project-buttons">
                                <a
                                    href={item.liveUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    Live <FiExternalLink />
                                </a>

                                <a
                                    href={item.githubUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    GitHub <FiGithub />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}

export default Home;