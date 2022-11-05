// import { useEffect, useState } from "react";

import BodyHeader from "../../components/BodyHeader/BodyHeader";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchBar from "../../components/SearchBar/SearchBar";

import "./RecipeIndexPage.module.scss";

export default function RecipeIndexPage({ recipes }) {
  return (
    <main className="main">
      <BodyHeader header="Index" />
      <SearchBar />
      <ul className="index__card-list">
        {recipes.map(({ id, title, image }) => {
          return (
            <li key={id} className="index__card-items">
              <RecipeCard title={title} image={image} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
