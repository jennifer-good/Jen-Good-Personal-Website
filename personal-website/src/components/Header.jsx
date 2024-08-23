import { Link } from 'react-router-dom';
import '../App.css'; // Ensure this path is correct

function Header() {
    return (
      <header className="header">
        <Link to="/" className="header-title">Jennifer Good</Link>
        <div className="dropdown">
        <button className="dropbtn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> {/* SVG hamburger icon */}
        </button>
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/artwork">Artwork</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;


