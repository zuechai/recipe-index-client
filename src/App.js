import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import RecipeIndexPage from "./pages/RecipeIndexPage/RecipeIndexPage";
import RecipePage from "./pages/RecipePage/RecipePage";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [recipes, setRecipes] = useState();
  console.log(recipes);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const result = await axios.get("http://localhost:5050/recipes");
        setRecipes(result.data);
      } catch (e) {
        console.log("ERROR ====> ", e);
      }
    };
    if (!recipes) {
      getRecipes();
    }
  }, [recipes]);

  const router = createBrowserRouter([
    {
      element: <HomePage recipes={recipes} />,
      children: [
        {
          path: "/",
          element: <RecipeIndexPage recipes={recipes} />,
        },
        {
          path: "/recipes/:id",
          element: <RecipePage />,
        },
      ],
    },
  ]);

  return (
    <>
      {!recipes ? (
        <h2>REPLACE ME WITH A LOADING COMPONENT</h2>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
