import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import BodyHeader from "../../components/BodyHeader/BodyHeader";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import Methods from "../../components/Methods/Methods";

import styles from "./RecipePage.module.scss";

//remove after testing
// import recipeImg from "../../assets/images/dashi-16-9.jpg";

export default function RecipePage() {
  const [selectedRecipe, setSelectedRecipe] = useState();

  const { id } = useParams();

  useEffect(() => {
    const getRecipeById = async () => {
      const result = await axios.get(`http://localhost:5050/recipes/${id}`);
      setSelectedRecipe(result.data);
    };
    if (!selectedRecipe) {
      getRecipeById();
    }
  }, [id, selectedRecipe]);

  while (!selectedRecipe) {
    return <h2>Loading...</h2>;
  }

  return (
    <main className={styles.rpMain}>
      <BodyHeader header={selectedRecipe.title} />
      {selectedRecipe.image !== null && (
        <div className={styles.rpMain__imgContainer}>
          <img
            src={selectedRecipe.image}
            alt={"No alternative text provided by user"}
            className={styles.rpMain__imgImg}
          />
        </div>
      )}
      <IngredientCard ingredients={selectedRecipe.ingredients} />
      <Methods methods={selectedRecipe.methods} />
    </main>
  );
}
