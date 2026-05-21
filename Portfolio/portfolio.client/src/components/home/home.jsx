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


    //Scroll Down To Projects On Arrow
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

    //Get All Projects
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
                        <div className="col-md-12 flex gap-3 text-center justify-content-center p-5 social-links-wrapper">
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=61573370439782&locale=sv_SE">
                                <FaFacebook className="fa-social-logo facebook-icon" />
                            </a>
                            <a target="_blank" href="https://linkedin.com/in/david-soderberg">
                                <FaLinkedin className="fa-social-logo linkedin-icon" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/djanar97/">
                                <FaInstagram className="fa-social-logo instagram-icon" />
                            </a>
                          
                            <a target="_blank" href="https://github.com/dame9785">
                                <FiGithub className="fa-social-logo github-icon" />
                            </a>
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
                                    href={item.projectGithubUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button btn-github-live"
                                >
                                    Live <FiExternalLink />
                                </a>

                                <a
                                    href={item.projectGithubUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button btn-github"
                                >
                                    GitHub <FiGithub/>
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