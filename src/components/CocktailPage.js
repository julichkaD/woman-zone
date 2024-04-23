import React, { useState, useEffect } from "react";
import Nav from "./Nav";
// import "./coctailPage.scss";

const CocktailPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setCocktails(data.drinks || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.elements.search.value);
  };

  const getIngredients = (drink) => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      if (ingredient) ingredients.push(ingredient);
    }
    return ingredients;
  };

  const getMeasure = (drink) => {
    let measures = [];
    for (let i = 1; i <= 15; i++) {
      const measure = drink[`strMeasure${i}`];
      if (measure) measures.push(measure);
    }
    return measures;
  };

  return (
    <>
      <Nav />
      <div className="container">
        <h1 className="drinks">Mixing Moments, Crafting Memories</h1>
        <form onSubmit={handleSearch} className="cocktail-card">
          <input
            name="search"
            type="text"
            placeholder="Enter cocktail name"
            onChange={handleInputChange}
            value={searchTerm}
          />
        </form>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : cocktails.length > 0 ? (
          cocktails.map((drink, index) => (
            <div key={index} className="box">
              <h1>
                {drink.strDrink}
                <span> ({drink.strAlcoholic})</span>
              </h1>
              <div>
                <h3>Ingredients:</h3>
                <ul>
                  {getIngredients(drink).map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              <h2>{drink.strGlass}</h2>
              <div>
                <br></br>
                <h3>Measure:</h3>
                <ul className="measure">
                  {getMeasure(drink).map((measure, idx) => (
                    <li key={idx}>{measure}</li>
                  ))}
                </ul>
              </div>
              <br></br>
              <h3>Instructions:</h3>
              <p>{drink.strInstructions}</p>
            </div>
          ))
        ) : (
          <p className="search">No cocktails found. Try another search!</p>
        )}
      </div>
    </>
  );
};

export default CocktailPage;
