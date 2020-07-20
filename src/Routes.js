import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  );
}