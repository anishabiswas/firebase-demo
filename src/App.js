import "./App.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase.js";
import Signup from "./pages/Signup.jsx";

function App() {
  const db = getDatabase(app);

  const putData = () => {
    set(ref(db, "users/anisha"), {
      id: 1,
      name: "Anisha Biswas",
      age: 27,
      address: "Barrackpore",
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>HI, we are creating react app with firebase</h1>
        <button onClick={putData}> save</button>
        <Signup />
      </header>
    </div>
  );
}

export default App;
