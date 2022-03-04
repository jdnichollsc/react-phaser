import React from "react";
import ReactDOM from "react-dom";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import "./style.css";

import { Home, About } from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/" render={() => <Redirect to="/home" />} exact />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
