import { Link } from "react-router-dom";
import pfp from "../assets/react.svg";

function Header() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="Care home">
            <img src={pfp} alt="Care" className="brand-logo" />
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            <Link to="/" className="nav-item">Home</Link>
            <span style={{ color: 'white', opacity: 0.5 }}>|</span>
            <Link to="/about" className="nav-item">About</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;