import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function IngredientsList() {
  const [ingredients, setIngredients] = useState([]);

  // Retrieve dessert from database
  useEffect(() => {
    axios
      .get(`http://localhost:5000/ingredient/all`)
      .then((res) => res.data)
      .then((data) => setIngredients(data));
  }, []);

  return (
    <div className="large-ingredient-container">
      {ingredients.map((ingredient) => (
        <div className="ingredient-container">
          <Link
            to={`/search/byingredient?name=${ingredient.name}`}
            style={{ textDecoration: "none" }}
          >
            <h3>{ingredient.name}</h3>
            <img
              src={ingredient.photo}
              alt={ingredient.name}
              className="ingredient-image"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default IngredientsList;
