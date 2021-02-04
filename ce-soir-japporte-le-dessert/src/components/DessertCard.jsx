import React, { useEffect, useState } from "react";
import "../styles/DessertCard.css";
import axios from "axios";

function DessertCard() {
  const [desserts, setDesserts] = useState([]);

  // Retrieve dessert from database
  useEffect(() => {
    axios
      .get(`http://localhost:5000/dessert/all`)
      .then((res) => res.data)
      .then((data) => setDesserts(data));
  }, []);

  return (
    <div className="page-container">
      {desserts.map((dessert) => (
        <div className="container">
          <img src={dessert.photo} alt={dessert.name} className="dessert-image"/>
          <h2 className="dessert-name">{dessert.name}</h2>
          <div className="information-dessert">
            <div className="difficulty">{dessert.difficulty_name}</div>
            <div className="time-needed">{dessert.time_needed}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DessertCard;
