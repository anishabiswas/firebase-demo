import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase.js";

const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      alert("Successfully created");
      setEmail("");
      setPassword("");
    });
  };

  const SignInWithGitHub = () => {
    signInWithPopup(auth, githubProvider);
  };

  const SignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      <div className="form">
        <h1>SignUp</h1>
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
        <button onClick={createUser}>SignUp</button>
        <button onClick={SignInWithGitHub}>Sign In with Github</button>
        <button onClick={SignInWithGoogle}>Sign In with Gmail</button>
      </div>
    </>
  );
};

export default Signup;
