import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "./components/NavBar/NavBar";
import RecipeIndexPage from "./pages/RecipeIndexPage/RecipeIndexPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [recipes, setRecipes] = useState();

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

  if (!recipes) {
    return <h2>REPLACE ME WITH A LOADING COMPONENT</h2>;
  }

  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <RecipeIndexPage recipes={recipes} />,
        },
        {
          path: "/recipes",
          element: <RecipeIndexPage recipes={recipes} />,
        },
        {
          path: "/recipes/:id",
          element: <RecipePage recipeId={recipes[0].recipeId} />,
        },
      ],
    },
  ]);

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
