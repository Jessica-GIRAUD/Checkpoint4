import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ReceipeCard.css";
import axios from "axios";
import Ingredient from "./Ingredient";
import macaX1 from "../img/MacaX1.png";
import macaX2 from "../img/MacaX2.png";
import macaX3 from "../img/MacaX3.png";
import macaX4 from "../img/MacaX4.png";
import imgChronos from "../img/Chrono.png";

function ReceipeCard() {
  const [receipes, setReceipes] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const { id } = useParams();

  // Retrieve receipe step by step for selected dessert
  // Retrieve selected dessert from database

  useEffect(() => {
    axios
      .get(`http://localhost:5000/receipe/${id}`)
      .then((res) => res.data)
      .then((data) => setReceipes(data));
    axios
      .get(`http://localhost:5000/dessert/${id}`)
      .then((res) => res.data)
      .then((data) => setDessert(data));
    axios
      .get(`http://localhost:5000/ingredient/${id}`)
      .then((res) => res.data)
      .then((data) => setIngredients(data));
  }, [id]);

  const getDifficulty = (difficulty) => {
    switch (difficulty) {
      case "Très facile":
        return (
          <img src={macaX1} alt="très facile" className="macaron1-receipe" />
        );
      case "Facile":
        return <img src={macaX2} alt="facile" className="macaron2-receipe" />;
      case "Moyen":
        return <img src={macaX3} alt="moyen" className="macaron3-receipe" />;
      case "Difficile":
        return (
          <img src={macaX4} alt="difficile" className="macaron4-receipe" />
        );
      default:
        return "";
    }
  };

  return (
    <div className="page-container-receipe">
      {dessert.map((dessert) => (
        <div key={dessert.index} className="container-receipe">
          <img
            src={dessert.photo}
            alt={dessert.name}
            className="dessert-image-receipe"
          />
          <h2 className="dessert-name-receipe">{dessert.name}</h2>
          <div className="information-dessert-receipe">
            <div className="difficulty-container-receipe">
              {getDifficulty(dessert.difficulty_name)}
              {dessert.difficulty_name}
            </div>
            <div className="time-container-receipe">
              <img src={imgChronos} alt="chronos" className="chronos-receipe" />
              {dessert.time_needed}
            </div>
          </div>
          <div className="large-ingredient-container">
            {ingredients.map((ingredient) => (
              <Ingredient name={ingredient.name} photo={ingredient.photo} />
            ))}
          </div>
          <div className="receipe-container">
            <h2 className="receipe-name">La recette :</h2>
            {receipes.map((step) => (
              <div className="receipe">
                <p key={step.index}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReceipeCard;
