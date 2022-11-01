import { useEffect, useState } from "react";
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

  return <h2>{recipe.name}</h2>;
}

// BodyHeader
//  title & breadcrumbs
// RecipeImage if not null
// IngredientCard
// Methods
