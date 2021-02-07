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
          <h2>Ingredients</h2>
        </Link>
        <Link to="/random" style={{textDecoration: "none"}} >
          <h2>Random</h2>
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
          <a id="contact" className="menu-item" href="/Recherche">
            Recherche
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
