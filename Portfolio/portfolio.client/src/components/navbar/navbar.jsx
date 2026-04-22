import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar-wrapper">
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="/addProject">Add Project</a></li>
                    <li><a href="/projectList">Project List</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;