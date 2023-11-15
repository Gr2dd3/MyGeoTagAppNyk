import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar-container">
            <div className="navbar-header-section"><Link className="navbar-header" to="/">Geocatching Nyköping</Link></div>
            <div className="navbar-section">
                <nav className="nav-links">
                    <Link className="nav-link" to="/">Start</Link>
                    <Link className="nav-link" to="/GeoCatch">GeoCatching</Link>
                    <Link className="nav-link" to="/Locations">Platser</Link>
                </nav>
            </div>
        </header>
    )
}