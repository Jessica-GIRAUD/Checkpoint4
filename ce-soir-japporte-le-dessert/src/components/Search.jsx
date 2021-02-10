import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import macaX1 from "../img/MacaX1.png";
import macaX2 from "../img/MacaX2.png";
import macaX3 from "../img/MacaX3.png";
import macaX4 from "../img/MacaX4.png";
import imgChronos from "../img/Chrono.png";
import LogoSearch from "../img/LogoSearch.png";
import "../styles/Search.css";

function Search() {
  const [search, setSearch] = useState({
    name: "",
  });
  const [desserts, setDesserts] = useState([]);

  const handleChange = (event) => {
    setSearch({ name: event.target.value });
  };

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      searchDessert();
    }
  };

  const searchDessert = async () => {
    await axios
      .get(`http://localhost:5000/search/byingredient?name=${search.name}`)
      .then((res) => setDesserts(res.data));
    await axios
      .get(`http://localhost:5000/search/bydessert?name=${search.name}`)
      .then((res) => setDesserts(res.data));
  };

  const getDifficulty = (difficulty) => {
    switch (difficulty) {
      case "Très facile":
        return <img src={macaX1} alt="très facile" className="macaron1" />;
      case "Facile":
        return <img src={macaX2} alt="facile" className="macaron2" />;
      case "Moyen":
        return <img src={macaX3} alt="moyen" className="macaron3" />;
      case "Difficile":
        return <img src={macaX4} alt="difficile" className="macaron4" />;
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="search-container">
        <input
          className="search-bar"
          placeholder="Ingrédient, dessert..."
          type="text"
          name="search"
          value={search.name}
          onChange={handleChange}
          onKeyUp={handleEnter}
        />
        <input
          type="image"
          className="search-button"
          src={LogoSearch}
          alt="macaron de recherche"
          onClick={searchDessert}
        />
      </div>
      <div className="page-container">
        {desserts.map((dessert) => (
          <div className="container" key={dessert.id}>
            <Link
              to={`/receipe/${dessert.id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={dessert.photo}
                alt={dessert.name}
                className="dessert-image"
              />
            </Link>
            <div className="dessert-name-container">
              <h2 className="dessert-name">{dessert.name}</h2>
            </div>
            <div className="information-dessert">
              <div className="difficulty-container">
                <div>{getDifficulty(dessert.difficulty_name)}</div>
                <div className="difficulty-name">{dessert.difficulty_name}</div>
              </div>
              <div className="time-container">
                <div className="chronos-image-container">
                  <img src={imgChronos} alt="chronos" className="chronos" />
                </div>
                <div className="time-needed">{dessert.time_needed}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
