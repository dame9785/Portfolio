import "./Highlights.css";

function Highlights() {
    return (
        <section className="highlights">
            <h2 className="highlights-title">What I Do</h2>

            <div className="highlights-container">

                <div className="highlight-card">
                    <h3>Frontend</h3>
                    <p>React, HTML, CSS och moderna UI-lösningar med fokus på design och UX.</p>
                </div>

                <div className="highlight-card">
                    <h3>Backend</h3>
                    <p>Node.js, API:er och databaser för att skapa stabila system.</p>
                </div>

                <div className="highlight-card">
                    <h3>Fullstack</h3>
                    <p>Bygger kompletta webbapplikationer från idé till färdig produkt.</p>
                </div>

            </div>
        </section>
    );
}

export default Highlights;