import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import PokemonProfile from "../PokemonProfile";
import PageNotFound from "../PageNotFound";
import HomePage from "../HomePage";

const Routing = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/pokemon/:id" component={PokemonProfile} />
        <Route exact path={["/pokedex", "/"]} component={HomePage} />
        <Route exact path="/pagenotfound" component={PageNotFound} />
        <Redirect to="/pagenotfound" />
      </Switch>
    </Router>
  );
};

export default Routing;
