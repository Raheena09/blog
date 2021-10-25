import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CreateBlog from "./Components/CreateBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase/compat";

import Hero from "./Hero";
import Login from "./Login";
import Nav from "./Components/Nav";

import { ThemeProvider } from "@material-ui/core";
import theme from './Components/Theme';

const Routing = () => {
  var database = firebase.database();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/createBlog" component={CreateBlog} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
