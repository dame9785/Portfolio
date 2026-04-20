import "./home.css";
import { FiArrowDown } from "react-icons/fi";
import { useRef } from "react";

// Project images
import ProjectImage from "../../assets/exmpel-project.jpg";

function Home() {
    const linkContentRef = useRef(null);

    const scrollToLinks = () => {
        linkContentRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const linksContents = [
        {
            title: "Project 1",
            description:
                "A personal portfolio built with React and ASP.NET Core API. Showcases my projects, skills, and experience with a clean and modern UI.",
            imageUrl: ProjectImage,
        },
        {
            title: "Project 2",
            description:
                "A personal portfolio built with React and ASP.NET Core API. Showcases my projects, skills, and experience with a clean and modern UI.",
            imageUrl: ProjectImage,
        },
        {
            title: "Project 3",
            description:
                "A personal portfolio built with React and ASP.NET Core API. Showcases my projects, skills, and experience with a clean and modern UI.",
            imageUrl: ProjectImage,
        },
    ];

    return (
        <div className="h-screen flex flex-col">
            {/* TOP */}
            <div className="flex-1 flex justify-center items-center container hero-content-parent">
                <div className="hero-content-children flex flex-col items-center">
                    <h1 className="hero-title">David Söderberg</h1>

                    <span className="text-lg text-white hero-span">
                        Fullstack developer
                    </span>

                    <hr className="hero-divider" />

                    <button id="scrolldown-btn" onClick={scrollToLinks}>
                        <FiArrowDown className="text-3xl text-white" />
                    </button>
                </div>
            </div>

            {/* BOTTOM */}
            <div
                ref={linkContentRef}
                id="link-content-parent"
                className="container flex flex-col items-center"
            >
                <div className="flex gap-10 flex-wrap justify-center items-center">
                    {linksContents.map((item, index) => (
                        <div key={index} className="link-content-box">

                            {/* IMAGE */}
                            <div className="image-box">
                                <img src={item.imageUrl} alt={item.title} />
                            </div>

                            {/* TITLE */}
                            <h3 className="project-title">{item.title}</h3>

                            {/* LINE */}
                            <div className="project-divider"></div>

                            {/* TEXT */}
                            <p className="project-description">{item.description}</p>

                            {/* BUTTONS */}
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