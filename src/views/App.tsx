import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CourseCatalogList from "./CourseCatalogList";
import FavoriteList from "./FavoriteList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/favorite">
          <FavoriteList />
        </Route>
        <Route path="/">
          <CourseCatalogList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
