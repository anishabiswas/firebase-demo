import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Successfully created");
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <div className="form">
        <h1>SignIn</h1>
        <label>Email:</label>
        <input
          type="text"
          placeholder="enter your email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="enter your password here"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={signInUser}>SignIn</button>
      </div>
    </>
  );
};

export default SignIn;
