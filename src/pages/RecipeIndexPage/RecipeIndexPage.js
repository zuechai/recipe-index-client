// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BodyHeader from "../../components/BodyHeader/BodyHeader";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from "./RecipeIndexPage.module.scss";

export default function RecipeIndexPage({ recipes }) {
  if (!recipes) {
    return <h2>Loading</h2>;
  }

  return (
    <main className={styles.index}>
      <BodyHeader header="Index" />
      <div className={styles.index__body}>
        <SearchBar />
        <ul className={styles.index__cardList}>
          {recipes.map(({ recipeId, title, image }) => {
            console.log(recipeId);
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
    </main>
  );
}
