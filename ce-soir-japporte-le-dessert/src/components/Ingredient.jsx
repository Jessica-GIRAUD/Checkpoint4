function Ingredient({ingredients}) {


  return (
  <div className="large-ingredient-container">
    {ingredients.map(ingredient => (
      <div className="ingredient-container">
        <h2>{ingredient.name}</h2>
        <img src={ingredient.photo} alt={ingredient.name} className="ingredient-image"/>
      </div>
    ))}
  </div>
  )
}

export default Ingredient;
