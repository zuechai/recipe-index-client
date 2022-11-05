import { useEffect, useState } from "react";
import axios from "axios";
import BodyHeader from "../../components/BodyHeader/BodyHeader";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import Methods from "../../components/Methods/Methods";

import styles from "./RecipePage.module.scss";

//remove after testing
// import recipeImg from "../../assets/images/dashi-16-9.jpg";

export default function RecipePage({ recipeId }) {
  const [selectedRecipe, setSelectedRecipe] = useState();

  // remove after testing
  // recipe.image = recipeImg;
  console.log(recipeId);

  useEffect(() => {
    const getRecipeById = async () => {
      const result = await axios.get(
        `http://localhost:5050/recipes/${recipeId}`
      );
      setSelectedRecipe(result.data);
    };
    if (!selectedRecipe) {
      getRecipeById();
    }
  }, [recipeId, selectedRecipe]);

  while (!selectedRecipe) {
    return <h2>Loading...</h2>;
  }

  // if (selectedRecipe) {
  return (
    <main>
      <BodyHeader header={selectedRecipe.title} />
      <div className={styles.rpMain__imgContainer}>
        {selectedRecipe.image !== null && (
          <img
            src={selectedRecipe.image}
            alt={"No alternative text provided by user"}
            className={styles.rpMain__imgImg}
          />
        )}
      </div>
      <IngredientCard ingredients={selectedRecipe.ingredients} />
      <Methods methods={selectedRecipe.methods} />
    </main>
  );
}
// }

// RecipeImage if not null
//  todo research optimizations for loading images, etc
// IngredientCard
// Methods
