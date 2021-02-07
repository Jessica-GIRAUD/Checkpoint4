import background from "../img/background.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { push as Menu } from "react-burger-menu";

function NavBar() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginBottom: "2%",
      }}
      className="navbar"
    >
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-image" />
        </Link>
      </div>

      <div className="link">
        <Link to="/" style={{textDecoration: "none"}} >
          <h2>Desserts</h2>
        </Link>
        <Link to="/ingredients" style={{textDecoration: "none"}} >
          <h2>Ingrédients</h2>
        </Link>
        <Link to="/search" style={{textDecoration: "none"}} >
          <h2><svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff0e1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg></h2>
        </Link>
        <Link to="/random" style={{textDecoration: "none"}} >
          <h2>Au Pif ?</h2>
        </Link>
      </div>

      <div className="mobile-menu">
        <Menu right>
          <a id="home" className="menu-item" href="/">
            Desserts
          </a>
          <a id="about" className="menu-item" href="/ingredients">
            Ingrédients
          </a>
          <a id="contact" className="menu-item" href="/search">
            Recherche
          </a>
          <a id="contact" className="menu-item" href="/random">
            Au Pif ?
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
