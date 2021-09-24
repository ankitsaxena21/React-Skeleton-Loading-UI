import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="nav">
            <Link to="/" className="nav-link">Custom</Link>
            <Link to="/lib" className="nav-link">Library</Link>
        </div>
    );
};

export default Navbar;