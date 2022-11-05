import { useEffect, useState } from "react";
import BodyHeader from "../../components/BodyHeader/BodyHeader";
import IngredientCard from "../../components/IngredientCard/IngredientCard";

import styles from "./RecipePage.module.scss";

//remove after testing
import recipeImg from "../../assets/images/dashi-16-9.jpg";
import Methods from "../../components/Methods/Methods";

export default function RecipePage({ recipe }) {
  const [selectedRecipe, setSelectedRecipe] = useState();

  // remove after testing
  recipe.image = recipeImg;

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
    <main>
      <BodyHeader recipe={selectedRecipe} />
      <div className={styles.rpMain__imgContainer}>
        {recipe.image !== null && (
          <img
            src={recipeImg}
            alt={recipe.imageAlt}
            className={styles.rpMain__imgImg}
          />
        )}
      </div>
      <IngredientCard ingredients={recipe.ingredients} />
      <Methods methods={recipe.methods} />
    </main>
  );
}

// RecipeImage if not null
//  todo research optimizations for loading images, etc
// IngredientCard
// Methods
