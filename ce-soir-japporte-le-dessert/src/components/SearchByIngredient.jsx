import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import DessertCard from "./DessertCard";

function SearchByIngredient() {
  const [desserts, setDesserts] = useState([]);

  const search = useLocation().search;
  const ingredient = new URLSearchParams(search).get("name");

  // Retrieve dessert from database
  useEffect(() => {
    axios
      .get(`http://localhost:5000/search/byingredient?name=${ingredient}`)
      .then((res) => res.data)
      .then((data) => setDesserts(data));
  }, [ingredient]);

  if (desserts.length <= 0) return <h2 style={{textAlign:"center", margin:"5%"}}>{`Aucune recette disponible à base de ${ingredient}`}</h2>
  else {
    return (
      <div>
        <h2 className="dessert-name">{`Une petite envie de ${ingredient} ?`}</h2>
        <div className="page-container">
          {desserts.map((dessert) => (
            <DessertCard
              id={dessert.id}
              name={dessert.name}
              photo={dessert.photo}
              difficulty_name={dessert.difficulty_name}
              time_needed={dessert.time_needed}
              key={dessert.index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchByIngredient;
