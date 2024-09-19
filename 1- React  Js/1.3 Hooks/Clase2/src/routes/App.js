import Counter from "../componets/Counter";
import Home from "../componets/Home";
import Login from "../componets/Login";
import Register from "../componets/Register";

function App() {
  const arraysName = [
    "Daniel",
    "Emanuel",
    "Miguel",
    "William",
    "Yesina",
    "Yudith",
  ];
  return (
    <div className="App">
      <h1>Hola</h1>
      <Register />

      <br></br>
      <Login />

      <Counter />

      {arraysName?.map((nom) => (
        <Home name={nom} />
      ))}
    </div>
  );
}

export default App;
