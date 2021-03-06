import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { useState, useEffect } from "react";


import fire from "./fire";
import Hero from "./Hero";
import CreateBlog from "./Components/CreateBlog";
function App() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const[localusername, setLocalusername]= useState("");

  const clearInputs = () => {
 
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
      localStorage.setItem("username",JSON.stringify(username));
      const getName= JSON.parse(localStorage.getItem("username"));
      setLocalusername(getName);

  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  // check if user exists
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      //  there is user
      if (user) {
        clearInputs();
        setUser(user);
      }
      //  or else no user
      else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  });
  return (
    <div className="App">
     
         
          {user ? (
            <Hero handleLogout={handleLogout}  username={localusername}/>
          ) : (
            <Login
              email={email}
              setEmail={setEmail}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          )}
         
     
    </div>
  );
}

export default App;
