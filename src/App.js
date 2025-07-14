import "./App.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase.js";
import Signup from "./pages/Signup.jsx";
import SignIn from "./pages/SignIn.jsx";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import FirestoreDB from "./pages/FirestoreDB.jsx";

const auth = getAuth(app);
const db = getDatabase(app);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        console.log("no user");
        setUser(null);
      }
    });
  }, []);

  const putData = () => {
    set(ref(db, "users/anisha"), {
      id: 2,
      name: "MAnisha Pal",
      age: 20,
      address: "shimla",
    });
  };

  if (user === null) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>HI, we are creating react app with firebase</h1>
          <button onClick={putData}> save Data</button>
          <Signup />
          <SignIn />
          <FirestoreDB />
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>HI, {user.displayName}</h1>
        <button onClick={() => signOut(auth)}> Logout</button>
      </header>
    </div>
  );
}

export default App;
