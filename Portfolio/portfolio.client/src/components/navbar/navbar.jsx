import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar-wrapper">
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/skills">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;