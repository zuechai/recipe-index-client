import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RecipeIndexPage from "./pages/RecipeIndexPage/RecipeIndexPage";
import RecipePage from "./pages/RecipePage/RecipePage";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <RecipeIndexPage />,
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
