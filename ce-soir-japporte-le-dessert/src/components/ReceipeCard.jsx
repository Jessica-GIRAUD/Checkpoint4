import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ReceipeCard.css";
import axios from "axios";
import Ingredient from "./Ingredient";

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
            <div className="">{dessert.difficulty_name}</div>
            <div className="">{dessert.time_needed}</div>
          </div>
                <Ingredient ingredients={ingredients} />
          <div>
            <h2>La recette :</h2>
            {receipes.map((step) => (
              <div>
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
