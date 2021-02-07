import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DessertCard.css";
import axios from "axios";
import macaX1 from "../img/MacaX1.png";
import macaX2 from "../img/MacaX2.png";
import macaX3 from "../img/MacaX3.png";
import macaX4 from "../img/MacaX4.png";
import imgChronos from "../img/Chrono.png";

function DessertCard() {
  const [desserts, setDesserts] = useState([]);

  // Retrieve dessert from database
  useEffect(() => {
    axios
      .get(`http://localhost:5000/dessert/all`)
      .then((res) => res.data)
      .then((data) => setDesserts(data));
  }, []);

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
    <div className="page-container">
      {desserts.map((dessert) => (
        <div className="container">
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
              <div>
                <img src={imgChronos} alt="chronos" className="chronos" />
              </div>
              <div className="time-needed">{dessert.time_needed}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DessertCard;
