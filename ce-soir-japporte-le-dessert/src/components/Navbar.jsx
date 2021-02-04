import background from "../img/background.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", marginBottom:"2%" }}>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </div>
  );
}

export default NavBar;
