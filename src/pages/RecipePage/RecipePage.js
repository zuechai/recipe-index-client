import { useEffect, useState } from "react";
import BodyHeader from "../../components/BodyHeader/BodyHeader";
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
    </>
  );
}

// BodyHeader
//  title & breadcrumbs
// RecipeImage if not null
// IngredientCard
// Methods
