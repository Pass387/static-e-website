import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-links">
        <h2><Link to="/" id="link">Home</Link></h2>
        <h2><Link to="/about" id="link">About</Link></h2>
      </nav>
    </header>
  );
}