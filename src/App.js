import React from "react";
import Dropdown from "./dropdown";
import SingleUser from "./single-user";
import { Router, Switch, Route, useParams } from "react-router-dom";
import history from "./history";
import Data from "./data.json";

export default function App() {
  function UserTable() {
    let { id } = useParams();
    let len = Data.length;
    return (
      <div>
        <SingleUser id={id} size={len} />
      </div>
    );
  }

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Dropdown} />
          <Route exact path="/:id" component={UserTable} />
        </Switch>
      </Router>
    </div>
  );
}
