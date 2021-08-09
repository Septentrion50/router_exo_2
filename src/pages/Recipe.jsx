import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = ({ recipes }) => {

  const { recipeId } = useParams();
  const [currentRecipe, setCurrentRecipe] = useState({});

  useEffect(() => {
    const foundRecipe = recipes.find((recipe) => recipe.idMeal === recipeId); 
    setCurrentRecipe(foundRecipe);
  }, [recipeId]);

  return (
    <div className="recipe">
      <h1>{currentRecipe.strMeal}</h1>
    </div>
  );
};

export default Recipe;