import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cocktail = () => {
  const [cocktail, setCocktail] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getCocktail = async () => {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      setCocktail(response.data.drinks[0]);
    };
    getCocktail();
  }, []);

  const searchCocktail = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    setCocktail(response.data.drinks[0]);
    setSearch('');
  };

  return (
    <div>
      <h1>Random Cocktail</h1>
      <p>Name: {cocktail.strDrink}</p>
      <p>Instructions: {cocktail.strInstructions}</p>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} height="200" />
      <form onSubmit={searchCocktail}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Cocktail;
