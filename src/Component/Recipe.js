import React, { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState();

  const APP_ID = "592cc57e";
  const APP_KEY = "865f356f2a94de1c50a7a5c050a8f8cb";

  useEffect(() => {
    getRecipeData();
  }, [query]);
  const getRecipeData = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="container">
      <form className="searchForm" onSubmit={getSearch}>
        <input className="searchInput" value={search} onChange={updateSearch} />
        <button className="btn">Search</button>
      </form>
      <div className="recipies">
        {recipe.map((item) => {
          return (
            <RecipeItem
              key={item.recipe.label}
              title={item.recipe.label}
              calories={item.recipe.calories}
              img={item.recipe.image}
              ingredients={item.recipe.ingredients}
              url={item.recipe.url}
            />
          );
          //recipe is the array name in api data
        })}
      </div>
    </div>
  );
}

export default Recipe;
