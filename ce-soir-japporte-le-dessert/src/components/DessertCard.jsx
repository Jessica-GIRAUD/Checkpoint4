import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DessertCard.css";
import axios from "axios";
import macaX1 from "../img/MacaX1.png";
import macaX2 from "../img/MacaX2.png";
import macaX3 from "../img/MacaX3.png";
import macaX4 from "../img/MacaX4.png";

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
      case "très facile":
        return <img src={macaX1} alt="très facile" />;
      case "facile":
        return <img src={macaX2} alt="facile" />;
      case "moyen":
        return <img src={macaX3} alt="moyen" />;
      case "difficile":
        return <img src={macaX4} alt="difficile" />;
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
          <h2 className="dessert-name">{dessert.name}</h2>
          <div className="information-dessert">
            <div className="difficulty">
              {getDifficulty(dessert.difficulty_name)}
              {dessert.difficulty_name}
            </div>
            <div className="time-needed">{dessert.time_needed}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DessertCard;
