import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      alert("Successfully created");
      setEmail("");
      setPassword("");
    });
  };

  return (
    <>
      <div className="form">
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
        <button onClick={createUser}>SignIn</button>
      </div>
    </>
  );
};

export default Signup;
