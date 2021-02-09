import React, { useEffect } from "react";
import "./App.css";
import EnterScreen from "./components/EnterScreen";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={EnterScreen} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
