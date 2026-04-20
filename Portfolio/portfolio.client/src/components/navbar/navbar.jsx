import "./navbar.css";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6">
            <div className="navbar flex justify-center items-center">
                <ul className="flex items-center gap-10">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li className="contact-btn"><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;