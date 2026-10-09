import { Link } from "react-router-dom";
import pfp from  "../assets/react.svg";
function Header() {
return (
    <>
    <header className="header">
          <a className="brand" href="/" aria-label="Care home">
            <img src={pfp} alt="Care" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
          </a>

          <nav aria-label="Main navigation">
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
        </header>
    </>
);
}
export default Header;