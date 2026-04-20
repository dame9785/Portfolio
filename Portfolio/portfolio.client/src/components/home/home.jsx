    import "./home.css";
    import { FiArrowDown } from "react-icons/fi";
    import { useRef } from "react";

    function Home() {

        const linkContentRef = useRef(null);

        const scrollToLinks = () => {
            linkContentRef.current?.scrollIntoView({ behavior: "smooth" })
        }

        const linksContents = [
            {
                title: "Link-1"
            },
            {
                title: "Link-2"
            },
            {
                title: "Link-3"
            },
        ];

        return (
            <div className="h-screen flex flex-col">

                {/* TOP (50%) */}
                <div className="flex-1 flex justify-center items-center hero-content-parent">
                    <div className="hero-content-children flex flex-col items-center">
                        <h1 className="hero-title">David Söderberg</h1>
                        <span className="text-lg text-white hero-span">
                            Fullstack developer
                        </span>
                        <hr className="bg-white w-1/2 mt-2 opacity-50" />
                        <button id="scrolldown-btn" onClick={scrollToLinks}>
                            <FiArrowDown className="text-3xl" />
                        </button>
                    </div>
                </div>

                {/* BOTTOM (50%) */}
                <div ref={linkContentRef} id="link-content-parent" className="hero-content-parent flex flex-col items-center">
                    <div className="hero-content-children flex-1 flex justify-center items-center">

                        {/* Links rad */}
                        {linksContents.map((item, index) => (
                            <div key={index} className="link-content-box">
                                <span className="text-white">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    export default Home;