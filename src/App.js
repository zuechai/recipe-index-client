import {
  // createBrowserHistory,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "./App.css";

const recipes = [
  {
    id: 1,
    name: "Fermented Napa Cabbage",
    yield: "1 quart jar",
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
        id: 1,
        name: "napa cabbage",
        quantity: 1,
        unit: "head",
        preparation: "",
      },
    ],
    method: ["do this in step 1", "step 2", "step 3"],
    notes: "anything else important about the important",
  },
];

function App() {
  const router = createBrowserRouter([
    {
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <div>Hi</div>,
        },
      ],
      element: <Footer />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
