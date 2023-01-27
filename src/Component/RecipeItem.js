import React from "react";

function RecipeItem({ title, calories, img, ingredients, url }) {
  return (
    <div className="recipeShow">
      <div className="recipeItem">
        <h1>
          <a href={url}> {title} </a>
        </h1>
        <ol>
          {ingredients.map((ingredient) => {
            return <li key={Math.random() * 2}>{ingredient.text}</li>;
          })}
        </ol>
        <p className="displayCal">Calories:{calories}</p>
        <img src={img} />
      </div>
    </div>
  );
}

export default RecipeItem;
