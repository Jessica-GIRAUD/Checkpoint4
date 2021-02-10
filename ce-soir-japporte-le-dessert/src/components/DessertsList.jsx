import React, { useEffect, useState } from "react";
import axios from "axios";
import DessertCard from "./DessertCard";
import "../styles/DessertCard.css";

function DessertsList() {
  const [desserts, setDesserts] = useState([]);

  // Retrieve dessert from database
  useEffect(() => {
    axios
      .get(`http://localhost:5000/dessert/all`)
      .then((res) => res.data)
      .then((data) => setDesserts(data));
  }, []);

  if(desserts === [] || null || undefined) return "Aucun dessert"
  else
  return (
    <div>
      <h2 className="dessert-name">Les desserts</h2>
      <div className="page-container">
        {desserts.map((dessert) => (
          <DessertCard
            key={dessert.index}
            id={dessert.id}
            name={dessert.name}
            photo={dessert.photo}
            difficulty_name={dessert.difficulty_name}
            time_needed={dessert.time_needed}
          />
        ))}
      </div>
    </div>
  );
}

export default DessertsList;
