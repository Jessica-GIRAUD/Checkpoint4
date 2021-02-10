import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import macaX1 from "../img/MacaX1.png";
import macaX2 from "../img/MacaX2.png";
import macaX3 from "../img/MacaX3.png";
import macaX4 from "../img/MacaX4.png";
import imgChronos from "../img/Chrono.png";
import "../styles/Random.css";

function Random() {
  const [dessert, setDessert] = useState([]);

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const random = getRandomArbitrary(1, 15);

  // Retrieve random dessert from database
  useEffect(() => {
    axios
      .get(`http://localhost:5000/dessert/${random}`)
      .then((res) => res.data)
      .then((dessert) => setDessert(dessert));
  }, [random]);
  
  const getDifficulty = (difficulty) => {
    switch (difficulty) {
      case "Très facile":
        return <img src={macaX1} alt="très facile" className="macaron1-random " />;
      case "Facile":
        return <img src={macaX2} alt="facile" className="macaron2-random " />;
      case "Moyen":
        return <img src={macaX3} alt="moyen" className="macaron3-random " />;
      case "Difficile":
        return <img src={macaX4} alt="difficile" className="macaron4-random " />;
      default:
        return "";
    }
  };

  return (
    <div>
    <h2 className="dessert-name"> Au pif !</h2>
        <div className="page-container-random">
      {dessert.map((dessert) => (
        <div className="container-random" key={dessert.index}>
          <Link
            to={`/receipe/${dessert.id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src={dessert.photo}
              alt={dessert.name}
              className="dessert-image-random"
            />
          </Link>
          <div className="dessert-name-container">
            <h2 className="dessert-name">{dessert.name}</h2>
          </div>
          <div className="information-dessert-random">
            <div className="difficulty-container-random">
              {getDifficulty(dessert.difficulty_name)}
              {dessert.difficulty_name}
            </div>
            <div className="time-container-random">
                <img src={imgChronos} alt="chronos" className="chronos-random" />
              {dessert.time_needed}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Random;
