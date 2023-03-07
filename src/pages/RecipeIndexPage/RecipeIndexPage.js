import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BodyHeader from "../../components/BodyHeader/BodyHeader";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from "./RecipeIndexPage.module.scss";

export default function RecipeIndexPage() {
  const [recipes, setRecipes] = useState();
  const [inputState, setInputState] = useState(null);

  useEffect(() => {
    const getRecipes = async (query) => {
      try {
        const result = await axios.get(
          `http://localhost:5050/recipes/search${query}`
        );
        console.log(result.data);
        setRecipes(result.data);
      } catch (e) {
        console.log("ERROR ====> ", e);
      }
    };
    if (!inputState) {
      getRecipes("");
    }

    if (inputState) {
      const query = `?q=${inputState}`;
      getRecipes(query);
    }
  }, [inputState]);

  if (!recipes) {
    return <h2>Loading</h2>;
  }

  return (
    <main className={styles.index}>
      <div className={styles.index__container}>
        <div className={styles.index__body}>
          <BodyHeader header="Index" />
          <SearchBar setInputState={setInputState} />
          <ul className={styles.index__cardList}>
            {recipes.map(({ recipeId, title, image }) => {
              return (
                <li key={recipeId} className="index__card-items">
                  <Link to={`/recipes/${recipeId}`}>
                    <RecipeCard id={recipeId} title={title} image={image} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
