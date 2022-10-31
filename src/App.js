import "./App.css";

function App() {
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

  return <div>Recipe Index App</div>;
}

export default App;
