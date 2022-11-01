import { useEffect, useState } from "react";
import BodyHeader from "../../components/BodyHeader/BodyHeader";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import "./RecipePage.scss";

export default function RecipePage({ recipe }) {
  const [selectedRecipe, setSelectedRecipe] = useState();

  useEffect(() => {
    if (!selectedRecipe) {
      setSelectedRecipe({ ...recipe });
      console.log("useEffect hit");
    }
  }, [recipe, selectedRecipe]);

  if (!selectedRecipe) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <BodyHeader recipe={selectedRecipe} />
      {recipe.image !== null && <img src="" alt={recipe.imageAlt} />}
      <IngredientCard ingredients={recipe.ingredients} />
    </>
  );
}

// RecipeImage if not null
//  todo research optimizations for loading images, etc
// IngredientCard
// Methods
