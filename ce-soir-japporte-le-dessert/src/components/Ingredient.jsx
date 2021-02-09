import { Link } from "react-router-dom";

function Ingredient({ name, photo }) {
  return (
    <div className="ingredient-container">
      <Link
        to={`/search/byingredient?name=${name}`}
        style={{ textDecoration: "none" }}
      >
        <h3>{name}</h3>
        <img src={photo} alt={name} className="ingredient-image" />
      </Link>
    </div>
  );
}

export default Ingredient;
