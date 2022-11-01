import {
  createBrowserHistory,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "./App.css";
import RecipePage from "./pages/RecipePage/RecipePage";

const recipes = [
  {
    id: 1,
    name: "Fermented Napa Cabbage",
    image: null,
    ingredients: [
      {
        id: 1,
        name: "napa cabbage",
        quantity: 1,
        unit: "head",
        preparation: "",
      },
      {
        id: 2,
        name: "water",
        quantity: 4,
        unit: "quarts",
        preparation: "",
      },
    ],
    method: [
      {
        id: 1,
        stepNum: 1,
        method:
          "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
      },
      {
        id: 2,
        stepNum: 2,
        method:
          "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
      },
      {
        id: 3,
        stepNum: 3,
        method:
          "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
      },
      {
        id: 4,
        stepNum: 4,
        method:
          "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
      },
    ],
    collaborators: [],
  },
];

function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <RecipePage recipe={recipes[0]} />,
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
