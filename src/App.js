import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from 'pages/Home';
import Recipe from 'pages/Recipe';
import Ingredient from 'pages/Ingredient';
import { useEffect, useState } from 'react';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [savedLinks, setSavedLinks] = useState([]);

  useEffect(() => {
    localStorage.setItem("lastLinks", savedLinks);
  }, [savedLinks]);

  const handleSave = (e) => {
    const id = e.target.parentNode.href.split('/');
    setSavedLinks([...savedLinks, id[id.length - 1]]);
  }

  const getRecipe = (query) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => setSearchResult(data.meals))
  }
  
  return (
    <div className="App">
      <Home getRecipe={getRecipe} />
      <Router>
        <nav>
          {searchResult.map((recipe) => (
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal} onClick={(e) => handleSave(e)}><p>{recipe.strMeal}</p></Link>
          ))}
        </nav>
        <Switch>
          <Route path="/recipe/:recipeId">
            <Recipe recipes={searchResult}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
