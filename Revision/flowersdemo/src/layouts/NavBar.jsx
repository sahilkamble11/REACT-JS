//navigation bar for the app
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navlink" to="/">Home</Link>
      <Link className="navlink" to="/about">About</Link>
      <Link className="navlink" to="/contact">Contact</Link>
      <Link className="navlink" to="/products">Products</Link>
    </nav>
  );
};

export default NavBar;